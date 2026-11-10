import { Navigate, Outlet } from "react-router";

type AuthUser = { token : string };


type ProtectedRouteProps = {
  token: AuthUser | null;
  redirectPath?: string;
  children: React.ReactNode;
};

const ProtectedRoute = ({
  token,
  redirectPath = "/login",
  children,
}: ProtectedRouteProps) => {
  if (!token) {
    return <Navigate to={redirectPath} replace />;
  }

return children ? children : <Outlet />;};

export default ProtectedRoute