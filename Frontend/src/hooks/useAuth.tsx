import { useState, useEffect } from "react";
const useAuth = () => {
  const [auth, setAuth] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setAuth(true);
    }
  }, []);

  return auth;
};

export default useAuth;
