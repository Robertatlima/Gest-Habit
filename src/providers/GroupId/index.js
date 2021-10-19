import { createContext, useState, useContext } from "react";

const GroupIdContext = createContext();

export const GroupIdProvider = ({ children }) => {
  const [groupId, setGroupId] = useState();

  return (
    <GroupIdContext.Provider value={{ groupId, setGroupId }}>
      {children}
    </GroupIdContext.Provider>
  );
};

export const useGroupId = () => useContext(GroupIdContext);
