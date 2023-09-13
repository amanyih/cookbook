//auth context

import React, { createContext, useState, useEffect } from "react";

export const AuthContext = createContext({
  auth: false,
  setAuth: (value: boolean) => {},
});
const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [auth, setAuth] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setAuth(true);
    }
  }, []);

  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
