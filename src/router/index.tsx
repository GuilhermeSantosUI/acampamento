import { useAuth } from '@/app/context';
import * as Views from '@/views';
import { Navigate, Outlet, Route, Routes } from 'react-router-dom';

export function Router() {
  return (
    <Routes>
      <Route element={<AuthGuard />}>
        <Route path="/" element={<Views.Login />} />
      </Route>

      <Route element={<AuthGuard isPrivate />}>
        <Route path="/dashboard" element={<Views.Acampamento />} />
        <Route path="/acampamento" element={<Views.Dashboard />} />
      </Route>
    </Routes>
  );
}

type AuthGuardProps = {
  isPrivate?: boolean;
};

export function AuthGuard({ isPrivate }: AuthGuardProps) {
  const { isAuth } = useAuth();

  if (!isAuth && isPrivate) {
    return <Navigate to="/" />;
  }

  if (isAuth && !isPrivate) {
    return <Navigate to="/dashboard" replace />;
  }

  return <Outlet />;
}
