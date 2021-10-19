import { createContext, useState, useContext } from "react";
import jwt_decode from "jwt-decode";

const UserContext = createContext();

const token = localStorage.getItem("token");

let { user_id } = token ? jwt_decode(localStorage.getItem("token")) : "";

const initialState = { id: user_id };

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(initialState);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
