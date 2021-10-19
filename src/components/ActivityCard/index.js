import { TextField } from "@material-ui/core";
import axios from "axios";
import { useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const ActivityCard = ({ activity, handleClickCloseCardModal }) => {
  const [edit, setEdit] = useState(false);

  const schema = yup.object().shape({
    title: yup.string(),
    realization_time: yup.string(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

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
      .catch((err) => {
        console.log(err);
      });
  };

  const handleEdit = () => {
    setEdit(!edit);
  };

  const handleConfirm = (data) => {
    const requestData = {
      title: data.title,
      realization_time: `${data.realization_time}T00:00:00Z`,
    };

    axios
      .patch(
        `https://kenzie-habits.herokuapp.com/activities/${activity.id}/`,
        requestData,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      )
      .then(() => {
        setEdit(false);
        handleClickCloseCardModal();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <form onSubmit={handleSubmit(handleConfirm)}>
      <h1>Detalhes da atividade</h1>
      <button onClick={handleClickCloseCardModal}>X - Fechar</button>
      <h1>Título:</h1>
      {edit ? (
        <TextField
          variant="outlined"
          id="title"
          label="Título"
          margin="normal"
          size="small"
          color="secondary"
          defaultValue={activity.title}
          {...register("title")}
          error={!!errors.title}
          helperText={errors.title?.message}
        />
      ) : (
        <p>{activity.title}</p>
      )}
      <h1>Data limite:</h1>
      {edit ? (
        <TextField
          variant="outlined"
          id="realization_time"
          label="Data limite"
          margin="normal"
          size="small"
          color="secondary"
          defaultValue={activity.realization_time
            .split("")
            .slice(0, 10)
            .join("")}
          {...register("realization_time")}
          error={!!errors.realization_time}
          helperText={errors.realization_time?.message}
        />
      ) : (
        <p>{activity.realization_time.split("").slice(0, 10).join("")}</p>
      )}
      <button onClick={handleConfirm}>Confirmar</button>
      <button type="button" onClick={handleEdit}>
        Editar
      </button>
      <button onClick={handleDelete}>Excluir</button>
    </form>
  );
};

export default ActivityCard;
