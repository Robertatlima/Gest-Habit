import axios from "axios";
import { useEffect, useState } from "react";
import { useAuth } from "../../providers/Auth";
// import { useUser } from "../../providers/User";
import { useHistory, Link } from "react-router-dom";
import Group from "../../components/GroupCard";
import GroupsForm from "../../components/GroupsForm";
import { Dialog } from "@mui/material";
import { TextField } from "@material-ui/core";
import { useGroups } from "../../providers/Groups";
import Button from "../../components/Button";
import CardProfile from "../../components/cardProfile";
import AllGroups from "../AllGroups"
import {
  ButtonsContainer,
  Container,
  ListContainer,
  ContainerPrincipal,
} from "./style.js";

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
  const [select, setSelect] = useState(false)
  const handleSelect = (value) => {
    setSelect(value)
  }

  return (
    <Container>
      <CardProfile />
      {auth ? (
        <ContainerPrincipal>
          <ButtonsContainer>
            <Button
              className="button"
              variant={"contained"}
              onClick={handleClickInsertModal}
            >
              Novo Grupo
            </Button>
            <Button
              className="button"
              variant={"contained"}
              onClick={()=>handleSelect(true)}
            >
              Encontrar
            </Button>
            <Button
              className="button"
              variant={"contained"}
              onClick={()=>handleSelect(false)}
            >
              Seus Grupos
            </Button>
            ?
          </ButtonsContainer>
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
          {select ?
            <ListContainer>
              <AllGroups />
            </ListContainer> :
            <ListContainer>
              {groups?.map((group) => {
                return (
                  <li key={group.id}>
                    <Group group={group} />
                  </li>
                );
              })}
            </ListContainer>}

        </ContainerPrincipal>
      ) : (
        history.push("/login")
      )}{" "}
    </Container>
  );
};

export default Groups;
