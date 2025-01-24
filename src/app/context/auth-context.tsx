import { createContext, useCallback, useState } from 'react';
import { authService } from '../services/auth';

type AuthState = {
    token: string;
};

type AuthContextValue = {
    signedIn: boolean;
    signIn(login: string, password: string): Promise<void>;
    signOut(): void;
};

export const AuthContext = createContext({} as AuthContextValue);

export function AuthProvider({ children }: { children: React.ReactNode }) {
    const [authState, setAuthState] = useState<AuthState | null>(() => {
        const token = localStorage.getItem('ACCESS_TOKEN');
        if (token) {
            return { token };
        }
        return null;
    });

    const signIn = useCallback(async (login: string, password: string) => {
        try {
            const { token } = await authService.auth({ login, password });

            localStorage.setItem('ACCESS_TOKEN', token);

            setAuthState({ token });
        } catch (error) {
            console.error('Login failed:', error);
            throw new Error('Login failed');
        }
    }, []);

    const signOut = useCallback(() => {
        localStorage.removeItem('ACCESS_TOKEN');
        setAuthState(null);
    }, []);

    return (
        <AuthContext.Provider
            value={{
                signedIn: !!authState,
                signIn,
                signOut,
            }}>
            {children}
        </AuthContext.Provider>
    );
}
