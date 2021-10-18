import { useHistory } from "react-router-dom";
import { Button, TextField } from "@material-ui/core";

import axios from "axios";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";

const GoalsForm = ({ groupId, handleClickCloseInsertModal }) => {
  const history = useHistory();

  const schema = yup.object().shape({
    title: yup.string().required("Campo Obrigatório"),
    difficulty: yup.string().required("Campo Obrigatório"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const handleForm = (data) => {
    const requestData = {
      title: data.title,
      difficulty: data.difficulty,
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
    <>
      <h2>Nova Meta</h2>
      <form onSubmit={handleSubmit(handleForm)}>
        <div className="input">
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
        </div>
        <div className="input">
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
        </div>
        <Button type="submit" variant="contained" color="secondary">
          Criar meta
        </Button>
      </form>
    </>
  );
};

export default GoalsForm;
