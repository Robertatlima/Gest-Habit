import { Button, TextField } from "@material-ui/core";
import { useHistory } from "react-router";

import axios from "axios";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useUser } from "../../providers/User";

const GoalsForm = ({ group }) => {
  const history = useHistory();

  const schema = yup.object().shape({
    title: yup.string().required("Campo Obrigatório"),
    difficulty: yup.string().required("Campo Obrigatório"),
    how_much_achieved: yup.string().required("Campo Obrigatório"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const handleForm = (data) => {
    const requestData = data;
    requestData = { ...requestData, group: group };

    const token = localStorage.getItem("token");

    axios
      .post("https://kenzie-habits.herokuapp.com/goals/", requestData, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        history.push(0);
      })
      .catch((err) => {
        console.log(err);
      });
    console.log(requestData);
  };

  return (
    <>
      <h2>Nova Meta</h2>
      <form onSubmit={handleSubmit(handleForm)}>
        <TextField
          variant="outlined"
          id="title"
          label="Titulo"
          margin="normal"
          size="small"
          color="secondary"
          {...register("title")}
          error={!!errors.title}
          helperText={errors.title?.message}
        />
        <TextField
          variant="outlined"
          id="difficulty"
          label="Dificuldade"
          margin="normal"
          size="small"
          color="secondary"
          {...register("difficulty")}
          error={!!errors.difficulty}
          helperText={errors.difficulty?.message}
        />
        <TextField
          variant="outlined"
          id="how_much_achieved"
          label="% finalizado"
          margin="normal"
          size="small"
          color="secondary"
          {...register("how_much_achieved")}
          error={!!errors.how_much_achieved}
          helperText={errors.how_much_achieved?.message}
        />
        <button type="submit">criar</button>
        <Button type="submit" variant="contained" color="secondary">
          Criar meta
        </Button>
      </form>
    </>
  );
};

export default GoalsForm;
