import "./style.css";
import axios from "axios";
import { useEffect, useState } from "react";
import Button from "../Button";
import { Dialog } from "@mui/material";
import GroupDetailsCard from "../GroupDetailsCard";

const GroupDetailsCardMini = ({ groupId }) => {
  const [insertModal, setInsertModal] = useState(false);
  const [group, setGroup] = useState();

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

  const handleClickModal = () => setInsertModal(true);
  const handleClickCloseModal = () => setInsertModal(false);

  return (
    <>
      {group && (
        <div className="detailscard">
          <h3>{group.name}</h3>
          <p>{group.description}</p>
          <Button
            className="editbutton"
            children="Editar Informações"
            onClick={handleClickModal}
          />
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
