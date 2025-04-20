import { Outlet } from 'react-router-dom';

const UnAuthGuard = () => {
  // Add logic if needed later (e.g., prevent logged-in users)
  return <Outlet />;
};

export default UnAuthGuard;