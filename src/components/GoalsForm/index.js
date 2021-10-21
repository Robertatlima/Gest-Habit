import { TextField } from "@material-ui/core";
import axios from "axios";
import Button from "../Button";
import { useState } from "react";

const GoalsForm = ({ groupId, handleClickCloseInsertModal }) => {
  const [title, setTitle] = useState();

  const handleTitle = (event) => {
    setTitle(event.target.value);
  };

  const [difficulty, setDifficulty] = useState("Fácil");

  const handleForm = () => {
    const requestData = {
      title: title,
      difficulty: difficulty,
      how_much_achieved: 0,
      group: groupId,
    };

    const token = localStorage.getItem("token");

    axios
      .post("https://kenzie-habits.herokuapp.com/goals/", requestData, {
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
        <h3>Criar meta</h3>
        <div type="button" onClick={handleClickCloseInsertModal}>
          X
        </div>
      </div>
      <form className="formulario">
        <div className="input">
          <TextField
            fullWidth
            value={title}
            onChange={handleTitle}
            variant="filled"
            id="title"
            label="Título da meta"
            margin="normal"
            size="medium"
            color="primary"
          />
        </div>
        <h3>Selecione a dificuldade:</h3>
        <div className="input">
          <Button
            type="button"
            className="selectbutton"
            schema={difficulty !== "Fácil"}
            children={"Fácil"}
            onClick={() => {
              setDifficulty("Fácil");
            }}
          />
          <Button
            type="button"
            className="selectbutton centerbutton"
            schema={difficulty !== "Médio"}
            children={"Médio"}
            onClick={() => {
              setDifficulty("Médio");
            }}
          />
          <Button
            type="button"
            className="selectbutton"
            schema={difficulty !== "Difícil"}
            children={"Difícil"}
            onClick={() => {
              setDifficulty("Difícil");
            }}
          />
        </div>
        <div>
          <Button
            className="submitbutton"
            schema={true}
            children={"Cadastrar hábito"}
            onClick={handleForm}
          />
        </div>
      </form>
    </div>
  );
};

export default GoalsForm;
