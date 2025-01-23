import * as Views from '@/views';
import { Navigate, Outlet, Route, Routes } from 'react-router-dom';

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Views.Login />} />
      <Route path="/dashboard" element={<Views.Dashboard />} />
      <Route path="/acampamento" element={<Views.Acampamento />} />
    </Routes>
  );
}

type AuthGuardProps = {
  isPrivate?: boolean;
};

export function AuthGuard({ isPrivate }: AuthGuardProps) {
  const isAuth = false;

  if (!isAuth && isPrivate) {
    return <Navigate to="/auth" />;
  }

  if (isAuth && !isPrivate) {
    return <Navigate to="/" replace />;
  }

  return <Outlet />;
}
