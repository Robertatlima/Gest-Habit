import { createContext, useState, useContext } from "react";

const AuthContext = createContext();

const initialToken = localStorage.getItem("token");

const initialState = initialToken ? true : false;

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState(initialState);

  const logoutF = () => {
    localStorage.clear();
    setAuth(false);
    // toast.error("Usuário Deslogado");
  };

  return (
    <AuthContext.Provider value={{ auth, setAuth, logoutF }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
