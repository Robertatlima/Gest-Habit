import { TextField } from "@material-ui/core";
import axios from "axios";
import Button from "../Button";
import { useState } from "react";
import { toast } from "react-toastify";

const GoalCard = ({ goal, handleClickCloseCardModal }) => {
  const [title, setTitle] = useState(goal.title);

  const handleTitle = (event) => {
    setTitle(event.target.value);
  };

  const [difficulty, setDifficulty] = useState(goal.difficulty);

  const token = localStorage.getItem("token");

  const handleDelete = () => {
    axios
      .delete(`https://kenzie-habits.herokuapp.com/goals/${goal.id}/`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then(() => handleClickCloseCardModal())
      .then(() => {
        toast.success("Meta excluída com sucesso!");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleConfirm = () => {
    const requestData = {
      title: title,
      difficulty: difficulty,
      how_much_achieved: 0,
    };
    axios
      .patch(
        `https://kenzie-habits.herokuapp.com/goals/${goal.id}/`,
        requestData,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      )
      .then(() => {
        handleClickCloseCardModal();
        toast.success("Meta atualizada com sucesso!");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="modalContainer">
      <div className="modalHeader">
        <h3>Detalhes da meta</h3>
        <div type="button" onClick={handleClickCloseCardModal}>
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
            children={"Salvar informações"}
            onClick={handleConfirm}
          />
        </div>
        <div>
          <Button
            className="submitbutton"
            schema={false}
            children={"Excluir meta"}
            onClick={handleDelete}
          />
        </div>
      </form>
    </div>
  );
};

export default GoalCard;
