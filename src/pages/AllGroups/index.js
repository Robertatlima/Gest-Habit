import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import Group from "../../components/GroupCard";
const AllGroups = ({ group }) => {
  const [groupsAll, setGroupsAll] = useState([]);
  const token = localStorage.getItem("token");
  const listGroups = () => {
    axios
      .get("https://kenzie-habits.herokuapp.com/groups/", {
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
    <>
      {groupsAll?.map((group) => {
        return (
          <li key={group.id} className="card">
            <Group group={group} />
          </li>
        );
      })}
    </>
  );
};
export default AllGroups;
