import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";

const AuthGuard = ({ component }) => {
  const navigate = useNavigate();
  const [isAuthorized, setIsAuthorized] = useState(null);

  useEffect(() => {
    console.log("Auth Guard");
    const token = localStorage.getItem("token");

    if (token) {
      setIsAuthorized(true);
    } else {
      navigate("/language-selection");
    }
  }, [navigate]);

  if (isAuthorized === null) {
    return null;
  }

  return <>{component}</>;
};

export default AuthGuard;