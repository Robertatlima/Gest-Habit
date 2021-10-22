import { MenuItem, TextField } from "@material-ui/core";
import axios from "axios";
import { useUser } from "../../providers/User";
import Button from "../Button";
import { useState } from "react";
import { toast } from "react-toastify";

const categories = [
  { id: 1, value: "Corpo e mente saudáveis" },
  { id: 2, value: "Foco, força e fé" },
  { id: 3, value: "Me poupe" },
  { id: 4, value: "Boa noite" },
  { id: 5, value: "Ficando em forma" },
  { id: 6, value: "Lar, doce lar" },
];

const HabitCard = ({ habit, handleClickCloseCardModal }) => {
  const [title, setTitle] = useState(habit.title);

  const handleTitle = (event) => {
    setTitle(event.target.value);
  };

  const [category, setCategory] = useState(habit.category);

  const handleCategory = (event) => {
    setCategory(event.target.value);
  };

  const [difficulty, setDifficulty] = useState(habit.difficulty);

  const [frequency, setFrequency] = useState(habit.frequency);

  const { user } = useUser();

  const token = localStorage.getItem("token");

  const handleForm = () => {
    const requestData = {
      title: title,
      category: category,
      difficulty: difficulty,
      frequency: frequency,
      achieved: false,
      how_much_achieved: 0,
      user: user.id,
    };

    axios
      .patch(
        `https://kenzie-habits.herokuapp.com/habits/${habit.id}/`,
        requestData,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      )
      .then(() => {
        handleClickCloseCardModal();
        toast.success("Hábito atualizado com sucesso");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleDelete = () => {
    axios
      .delete(`https://kenzie-habits.herokuapp.com/habits/${habit.id}/`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then(() => {
        toast.success("Hábito excluído com sucesso!");

        handleClickCloseCardModal();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <div className="modalContainer">
        <div className="modalHeader">
          <h3>Atualizar hábito</h3>

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
              label="Nome do hábito"
              margin="normal"
              size="medium"
              color="primary"
            />
          </div>
          <div className="input">
            <TextField
              fullWidth
              select
              value={category}
              onChange={handleCategory}
              variant="filled"
              id="category"
              label="Categoria"
              margin="normal"
              size="medium"
              color="primary"
            >
              {categories.map((option) => (
                <MenuItem key={option.id} value={option.value}>
                  {option.value}
                </MenuItem>
              ))}
            </TextField>
          </div>
          <h3>Selecione a frequência:</h3>
          <div className="input">
            <Button
              type="button"
              className="selectbutton"
              schema={frequency !== "Diário"}
              children={"Diário"}
              onClick={() => {
                setFrequency("Diário");
              }}
            />
            <Button
              type="button"
              className="selectbutton centerbutton"
              schema={frequency !== "Semanal"}
              children={"Semanal"}
              onClick={() => {
                setFrequency("Semanal");
              }}
            />
            <Button
              type="button"
              className="selectbutton"
              schema={frequency !== "Mensal"}
              children={"Mensal"}
              onClick={() => {
                setFrequency("Mensal");
              }}
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
              schema={false}
              children={"Salvar informações"}
              onClick={handleForm}
            />
            <Button
              className="submitbutton"
              schema={true}
              children={"Excluir hábito"}
              onClick={handleDelete}
            />
          </div>
        </form>
      </div>
    </>
  );
};

export default HabitCard;
