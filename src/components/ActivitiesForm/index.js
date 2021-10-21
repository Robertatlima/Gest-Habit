import { TextField } from "@material-ui/core";
import axios from "axios";
import { useState } from "react";
import Button from "../Button";

const ActivitiesForm = ({ groupId, handleClickCloseInsertModal }) => {
  const [title, setTitle] = useState();

  const handleTitle = (event) => {
    setTitle(event.target.value);
  };

  const [realization_time, setRealization_time] = useState("2021-12-31");

  const handleRealization_time = (event) => {
    setRealization_time(event.target.value);
  };

  const handleForm = () => {
    const requestData = {
      title: title,
      realization_time: `${realization_time}T18:00:00Z`,
      group: groupId,
    };

    const token = localStorage.getItem("token");

    axios
      .post("https://kenzie-habits.herokuapp.com/activities/", requestData, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then(() => {
        handleClickCloseInsertModal();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="modalContainer">
      <div className="modalHeader">
        <h3>Criar atividade</h3>
        <div type="button" onClick={handleClickCloseInsertModal}>
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
            children={"Criar atividade"}
            onClick={handleForm}
          />
        </div>
      </form>
    </div>
  );
};

export default ActivitiesForm;
