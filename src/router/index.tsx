import { useAuth } from '@/app/context';
import * as Views from '@/views';
import { Navigate, Outlet, Route, Routes } from 'react-router-dom';

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Views.Login />} />

      <Route element={<AuthGuard isPrivate />}>
        <Route path="/dashboard" element={<Views.Dashboard />} />
        <Route path="/acampamento" element={<Views.Acampamento />} />
      </Route>
    </Routes>
  );
}

type AuthGuardProps = {
  isPrivate?: boolean;
};

export function AuthGuard({ isPrivate }: AuthGuardProps) {
  const { signedIn } = useAuth();

  if (!signedIn && isPrivate) {
    return <Navigate to="/" />;
  }

  if (signedIn && !isPrivate) {
    return <Navigate to="/dashboard" replace />;
  }

  return <Outlet />;
}
