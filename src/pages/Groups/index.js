import axios from "axios";
import { useEffect, useState } from "react";
import { useAuth } from "../../providers/Auth";
import { useUser } from "../../providers/User";
import { useHistory } from "react-router-dom";
import Group from "../../components/Group";
import GroupsForm from "../../components/GroupsForm";

const Groups = () => {
  const history = useHistory();

  const { user } = useUser();
  const { auth } = useAuth();
  const [groups, setGroups] = useState();

  const token = localStorage.getItem("token");

  useEffect(() => {
    axios
      .get("https://kenzie-habits.herokuapp.com/groups/subscriptions/", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => setGroups(response.data))
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      {auth ? (
        <div>
          <h1>
            ID: {user.id}; Nome: {user.username}; E-mail: {user.email}
          </h1>
          <ul>
            {groups?.map((group) => {
              return (
                <li key={group.id}>
                  <Group group={group} />;
                </li>
              );
            })}
          </ul>
          <GroupsForm />
        </div>
      ) : (
        history.push("/login")
      )}
    </>
  );
};

export default Groups;
