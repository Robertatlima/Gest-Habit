import "./style.css";
import axios from "axios";
import { useEffect, useState } from "react";
import Button from "../Button";
import { Dialog } from "@mui/material";
import GroupDetailsCard from "../GroupDetailsCard";
import { useSubscribible } from "../../providers/Subscribible";
import { useHistory } from "react-router";

const GroupDetailsCardMini = ({ groupId }) => {
  const history = useHistory();

  const { subscribible } = useSubscribible();

  const [insertModal, setInsertModal] = useState(false);
  const [group, setGroup] = useState();

  const handleClickModal = () => setInsertModal(true);
  const handleClickCloseModal = () => setInsertModal(false);

  const token = localStorage.getItem("token");

  useEffect(() => {
    axios
      .get(`https://kenzie-habits.herokuapp.com/groups/${groupId}/`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => setGroup(response.data))
      .catch((err) => {
        console.log(err);
      });
  }, [insertModal]);

  const handleSubscribe = () => {
    console.log(token);
    console.log(groupId);
    axios
      .post(
        `https://kenzie-habits.herokuapp.com/groups/${groupId}/subscribe/`,
        {},
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      )
      .then(() => {
        history.push("/groups");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      {group && (
        <div className="detailscard">
          <h3>{group.name}</h3>
          <p>{group.description}</p>
          {subscribible ? (
            <Button
              className="editbutton"
              children="Inscrever-se"
              schema={false}
              onClick={handleSubscribe}
            />
          ) : (
            <Button
              className="editbutton"
              children="Editar Informações"
              schema={true}
              onClick={handleClickModal}
            />
          )}
        </div>
      )}
      <Dialog
        // fullScreen={fullScreen}
        open={insertModal}
        onClose={handleClickCloseModal}
        aria-labelledby="responsive-dialog-title"
      >
        <GroupDetailsCard
          group={group}
          handleClickCloseModal={handleClickCloseModal}
        />
      </Dialog>
    </>
  );
};
export default GroupDetailsCardMini;
