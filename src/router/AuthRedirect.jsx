import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const AuthRedirect = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      navigate("/home"); // or your home route
    } else {
      navigate("/language-selection");
    }
  }, [navigate]);

  return null; // Optional: or show loading spinner
};

export default AuthRedirect;