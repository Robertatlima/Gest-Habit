import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import Group from "../../components/GroupCard";
import * as C from "./styles.js";
import { AiOutlineCloseCircle } from "react-icons/ai";
const AllGroups = () => {
  const [groupsAll, setGroupsAll] = useState([]);
  const token = localStorage.getItem("token");
  const listGroups = () => {
    axios
      .get("https://kabit-api.herokuapp.com/groups/", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        setGroupsAll(response.data.results);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    listGroups();
  }, []);

  return (
    <C.Container>
      <div>
        <h1>Encontrar</h1>
        <AiOutlineCloseCircle />

        {groupsAll.map((group) => {
          return (
            <div className="card">
              <Group group={group} />
            </div>
          );
        })}
      </div>
    </C.Container>
  );
};
export default AllGroups;
