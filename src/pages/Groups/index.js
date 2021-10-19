import axios from "axios";
import { useEffect, useState } from "react";
import { useAuth } from "../../providers/Auth";
// import { useUser } from "../../providers/User";
import { useHistory, Link } from "react-router-dom";
import Group from "../../components/GroupCard";
import GroupsForm from "../../components/GroupsForm";
import { Dialog } from "@mui/material";
import { Button } from "@material-ui/core";
import { useGroups } from "../../providers/Groups";
import * as C from "./styles.js";

const Groups = () => {
  const history = useHistory();

  //const { user } = useUser();
  const { auth } = useAuth();
  const { groups, setGroups } = useGroups();
  const [insertModal, setInsertModal] = useState(false);

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
  }, [insertModal]);

  const handleClickInsertModal = () => setInsertModal(!insertModal);
  const handleClickCloseInsertModal = () => setInsertModal(false);

  return (
    <C.Container>
      {auth ? (
        <div>
          <Button
            className="button"
            variant={"contained"}
            onClick={handleClickInsertModal}
          >
            Novo grupo
          </Button>
          <Link className="link" to="/allGroups">
            <Button className="button" variant={"contained"}>
              Encontrar
            </Button>
          </Link>
          <div>
            <Dialog
              open={insertModal}
              onClose={handleClickCloseInsertModal}
              aria-labelledby="responsive-dialog-title"
            >
              {insertModal && (
                <GroupsForm
                  handleClickInsertModal={handleClickCloseInsertModal}
                />
              )}
            </Dialog>
          </div>

          <ul>
            {groups?.map((group) => {
              return (
                <li key={group.id}>
                  <Group group={group} />
                </li>
              );
            })}
          </ul>
        </div>
      ) : (
        history.push("/login")
      )}{" "}
    </C.Container>
  );
};

export default Groups;
