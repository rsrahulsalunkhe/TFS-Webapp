import { Navigate, Outlet } from 'react-router-dom';

const AuthGuard = () => {
  const token = localStorage.getItem("user_token");

  if (!token) {
    return <Navigate to="/mobile-insertion" replace />;
  }

  return <Outlet />;
};

export default AuthGuard;