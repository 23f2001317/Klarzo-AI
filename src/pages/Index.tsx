
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Home from "./Home";

// This page acts as a redirect to the Home component
const Index = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Uncomment this if you want to redirect to the home page
    // navigate("/", { replace: true });
  }, [navigate]);

  return <Home />;
};

export default Index;
