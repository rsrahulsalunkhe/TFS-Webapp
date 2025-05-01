import { Navigate, Outlet, useLocation } from 'react-router-dom';

const AuthGuard = () => {
  const token = localStorage.getItem("user_token");
  const location = useLocation();

  if (!token) {
    localStorage.setItem("redirectAfterLogin", location.pathname);
    return <Navigate to="/mobile-insertion" replace />;
  }

  return <Outlet />;
};

export default AuthGuard;