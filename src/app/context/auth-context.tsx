import { localStorageKeys } from '@/app/config';
import { api } from '@/app/services';
import { authService } from '@/app/services/auth';
import { jwtDecode } from 'jwt-decode';
import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';

interface User {
  cpf: string;
  email: string;
  name: string;
  phoneNumber: string;
  imageUrl: string;
}

interface AuthRequest {
  login: string;
  password: string;
}

interface AuthContextProps {
  signIn(params: AuthRequest): Promise<void>;
  signOut: () => void;
  userLogged: boolean;
  updateUser: (user: Partial<User>) => void;
  updateAvatarUser: (avatar: string) => void;
  isAuth: boolean;
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [isAuth, setIsAuth] = useState<boolean>(false);
  const [data, setData] = useState<{ token: string }>(() => {
    const token = localStorage.getItem(localStorageKeys.ACCESS_TOKEN);

    if (token) {
      api.defaults.headers.Authorization = `Bearer ${token}`;
      setIsAuth(true);
      return { token };
    }

    return {} as { token: string };
  });

  const signIn = useCallback(async (params: AuthRequest) => {
    const { token } = await authService.auth(params);

    localStorage.setItem(localStorageKeys.ACCESS_TOKEN, token);
    api.defaults.headers.Authorization = `Bearer ${token}`;

    setIsAuth(true);
    setData({ token });
  }, []);

  const signOut = useCallback(() => {
    localStorage.removeItem(localStorageKeys.ACCESS_TOKEN);

    setData({} as { token: string });
    setIsAuth(false);

    api.defaults.headers.Authorization = '';
    api.defaults.headers['Cache-Control'] = 'no-cache';
  }, []);

  const updateUser = useCallback((user: Partial<User>) => {
    // Implement user update logic here
  }, []);

  const updateAvatarUser = useCallback((avatar: string) => {
    // Implement avatar update logic here
  }, []);

  const userLogged = useMemo(() => !!data.token, [data.token]);

  useEffect(() => {
    const token = localStorage.getItem(localStorageKeys.ACCESS_TOKEN);

    if (token && checkTokenExpiration(token)) {
      signOut();
    }
  }, [signOut]);

  return (
    <AuthContext.Provider
      value={{
        isAuth,
        signIn,
        signOut,
        userLogged,
        updateUser,
        updateAvatarUser,
      }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }

  return context;
}

function checkTokenExpiration(token: string) {
  if (!token) return true;

  try {
    const { exp } = jwtDecode(token) as { exp: number };
    const currentTime = Math.floor(Date.now() / 1000);
    return exp < currentTime;
  } catch (error) {
    console.error('Token inválido:', error);
    return true;
  }
}
