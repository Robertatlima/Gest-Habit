import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import Group from "../../components/GroupCard";

import { AiOutlineCloseCircle } from "react-icons/ai";

import { useParams } from "react-router-dom";

const AllGroups = ({ group }) => {
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
