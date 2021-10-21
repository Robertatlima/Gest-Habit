import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import Group from "../../components/GroupCard";
import api from "../../services/api";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { Button } from "@material-ui/core";
import { useParams } from "react-router-dom";
import Header from "../../components/NavBar";
import { ListContainer } from "../Groups/style";
const AllGroups = ({ group }) => {
  const [groupsAll, setGroupsAll] = useState([]);
  const token = localStorage.getItem("token");
  let { id } = useParams();
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
      <ListContainer>
        {groupsAll.map((group) => {
          return (
            <li className="card">
              <Group group={group} />
            </li>
          );
        })}
      </ListContainer>
  );
};
export default AllGroups;
