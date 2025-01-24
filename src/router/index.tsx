import * as Views from '@/views';
import { Navigate, Outlet, Route, Routes } from 'react-router-dom';
import {AuthContext} from "../app/context";
import {useContext} from "react";

export function Router() {
  return (
      <Routes>
          <Route path="/" element={<Views.Login />} />

          <Route element={<AuthGuard isPrivate={true} />}>
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
    const { signedIn } = useContext(AuthContext);

    if (!signedIn && isPrivate) {
        return <Navigate to="/" />;
    }
    if (signedIn && !isPrivate) {
        return <Navigate to="/dashboard" replace />;
    }
    return <Outlet />;
}
