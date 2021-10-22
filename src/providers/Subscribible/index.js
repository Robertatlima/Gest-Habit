import { createContext, useState, useContext } from "react";

const SubscribibleContext = createContext();

export const SubscribibleProvider = ({ children }) => {
  const [subscribible, setSubscribible] = useState();

  return (
    <SubscribibleContext.Provider value={{ subscribible, setSubscribible }}>
      {children}
    </SubscribibleContext.Provider>
  );
};

export const useSubscribible = () => useContext(SubscribibleContext);
