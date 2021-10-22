import axios from "axios";

import Button from "../Button";
import { useState } from "react";
import { toast } from "react-toastify";

const ActivityCard = ({ activity, handleClickCloseCardModal }) => {
  const [title, setTitle] = useState(activity.title);

  const handleTitle = (event) => {
    setTitle(event.target.value);
  };

  const [realization_time, setRealization_time] = useState(
    activity.realization_time.split("").slice(0, 10).join("")
  );

  const handleRealization_time = (event) => {
    setRealization_time(event.target.value);
  };

  const token = localStorage.getItem("token");

  const handleDelete = () => {
    axios
      .delete(
        `https://kenzie-habits.herokuapp.com/activities/${activity.id}/`,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      )
      .then(() => handleClickCloseCardModal())
      .then(() => {
        toast.success("Atividade excluída com sucesso!");
      })
      .catch((err) => {
        console.log(err);
      });
  };


  const handleConfirm = (data) => {
    const requestData = {
      title: title,
      realization_time: `${realization_time}T18:00:00Z`,
    };

    console.log(requestData);

    axios
      .patch(
        `https://kenzie-habits.herokuapp.com/activities/${activity.id}/`,
        requestData,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      )
      .then(() => {
        handleClickCloseCardModal();
        toast.success("Atividade atualizada com sucesso!");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="modalContainer">
      <div className="modalHeader">
        <h3>Descrição da atividade</h3>
        <div type="button" onClick={handleClickCloseCardModal}>
          X
        </div>
      </div>
      <form>
        <div className="input">
          <TextField
            fullWidth
            value={title}
            onChange={handleTitle}
            variant="filled"
            id="title"
            label="Nome da atividade"
            margin="normal"
            size="medium"
            color="primary"
          />
        </div>
        <div className="input">
          <TextField
            fullWidth
            value={realization_time}
            onChange={handleRealization_time}
            variant="filled"
            id="realization_time"
            label="Data Limite"
            margin="normal"
            size="medium"
            color="primary"
          />
        </div>
        <div>
          <Button
            className="submitbutton"
            schema={true}
            children={"Salvar informações"}
            onClick={handleConfirm}
          />
        </div>
        <div>
          <Button
            className="submitbutton"
            schema={false}
            children={"Excluir atividade"}
            onClick={handleDelete}
          />
        </div>
      </form>
    </div>

  );
};

export default ActivityCard;
