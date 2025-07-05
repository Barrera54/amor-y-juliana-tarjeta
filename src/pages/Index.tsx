import { useState } from "react";
import LoginForm from "@/components/LoginForm";
import SpecialLandingPage from "@/components/SpecialLandingPage";

const Index = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState("");

  const handleLogin = (name: string) => {
    setUserName(name);
    setIsLoggedIn(true);
  };

  if (!isLoggedIn) {
    return <LoginForm onLogin={handleLogin} />;
  }

  return <SpecialLandingPage userName={userName} />;
};

export default Index;
