import { createContext, useState, useContext, useEffect } from "react";
import jwt_decode from "jwt-decode";
import axios from "axios";
import api from "../../services/api";
const UserContext = createContext();

const token = localStorage.getItem("token");

let { user_id } = token ? jwt_decode(localStorage.getItem("token")) : "";

const initialState = { id: user_id };

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(initialState);

  useEffect(() => {
    axios
      .get(`https://kenzie-habits.herokuapp.com/users/${user_id}/`)
      .then((response) => {
        setUser({
          id: response.data.id,
          username: response.data.username,
          email: response.data.email,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  const editUser = (name) => {
    api
      .patch(
        `users/${user_id}/`,
        {
          username: name,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((_) => console.log("Nome modificado"))
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <UserContext.Provider value={{ user, setUser, editUser }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
