import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import Group from "../../components/Group";

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
    <>
      <div className="card">
        <h1>Todos os Grupos</h1>

        {groupsAll.map((group) => {
          return <Group group={group} />;
        })}
      </div>
    </>
  );
};
export default AllGroups;
