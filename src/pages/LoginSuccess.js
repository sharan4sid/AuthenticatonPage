import { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const LoginSuccess = () => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const token = params.get("token");

    if (token) {
      localStorage.setItem("token", token);
      navigate("/dashboard");
    }
  }, [location, navigate]);

  return <h2>Logging you in...</h2>;
};

export default LoginSuccess;
