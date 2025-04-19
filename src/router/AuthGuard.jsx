import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation  } from "react-router-dom";

const AuthGuard = ({ component }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isAuthorized, setIsAuthorized] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      setIsAuthorized(true);
    } else {
      localStorage.setItem("redirectAfterLogin", location.pathname);
      navigate("/mobile-insertion");
    }
  }, [navigate, location]);

  if (isAuthorized === null) {
    return null;
  }

  return <>{component}</>;
};

export default AuthGuard;