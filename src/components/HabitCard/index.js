import { useHistory } from "react-router-dom";
import { TextField } from "@material-ui/core";
import axios from "axios";
import { useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const HabitCard = ({ habit, handleClickCloseCardModal }) => {
  const history = useHistory();

  const [edit, setEdit] = useState(false);

  const schema = yup.object().shape({
    achieved: yup.string().required("Campo Obrigatório"),
    how_much_achieved: yup.string().required("Campo Obrigatório"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const token = localStorage.getItem("token");

  const handleDelete = () => {
    axios
      .delete(`https://kenzie-habits.herokuapp.com/habits/${habit.id}/`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then(() => handleClickCloseCardModal())
      .catch((err) => {
        console.log(err);
      });
  };

  const handleEdit = () => {
    setEdit(!edit);
  };

  const handleConfirm = (data) => {
    axios
      .patch(`https://kenzie-habits.herokuapp.com/habits/${habit.id}/`, data, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then(() => {
        setEdit(false);
        handleClickCloseCardModal();
        history.push(`/habits`);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <form className="formulario" onSubmit={handleSubmit(handleConfirm)}>
      <h1>Detalhes do Hábito</h1>
      <button onClick={handleClickCloseCardModal}>X - Fechar</button>
      <h1>Título:</h1>
      <p>{habit.title}</p>
      <h1>Dificuldade:</h1>
      <p>{habit.difficulty}</p>
      <h1>Categoria:</h1>
      <p>{habit.category}</p>
      <h1>Frequência:</h1>
      <p>{habit.frequency}</p>
      <h1>Completo:</h1>
      {edit ? (
        <TextField
          variant="outlined"
          id="achieved"
          label=" box true/false"
          margin="normal"
          size="small"
          color="secondary"
          {...register("achieved")}
          error={!!errors.achieved}
          helperText={errors.achieved?.message}
        />
      ) : (
        <p>{habit.achieved ? "Completo" : "Incompleto"}</p>
      )}
      <h1>Progresso:</h1>
      {edit ? (
        <TextField
          variant="outlined"
          id="how_much_achieved"
          label="% de progresso"
          margin="normal"
          size="small"
          color="secondary"
          {...register("how_much_achieved")}
          error={!!errors.how_much_achieved}
          helperText={errors.how_much_achieved?.message}
        />
      ) : (
        <p>{habit.how_much_achieved} %</p>
      )}
      <button onClick={handleConfirm}>Confirmar</button>
      <button onClick={handleEdit}>Editar</button>
      <button onClick={handleDelete}>Excluir</button>
    </form>
  );
};

export default HabitCard;
