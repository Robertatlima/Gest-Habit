import { Link, useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import { TextField, Button } from "@material-ui/core";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";
import { useUser } from "../../providers/User";

const HabitsForm = () => {
  const history = useHistory();

  const schema = yup.object().shape({
    title: yup.string().required("Campo Obrigatório"),
    category: yup.string().required("Campo Obrigatório"),
    difficulty: yup.string().required("Campo Obrigatório"),
    frequency: yup.string().required("Campo Obrigatório"),
    achieved: yup.string().required("Campo Obrigatório"),
    how_much_achieved: yup.string().required("Campo Obrigatório"),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const { user } = useUser();

  const handleForm = (data) => {
    const requestData = {
      title: data.title,
      category: data.category,
      difficulty: data.difficulty,
      frequency: data.frequency,
      achieved: data.achieved,
      how_much_achieved: data.how_much_achieved,
      user: user.id,
    };

    const token = localStorage.getItem("token");

    axios
      .post("https://kenzie-habits.herokuapp.com/habits/", requestData, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        history.push(`/habits`);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <h1>Formulário de criação de hábito</h1>
      <form className="formulario" onSubmit={handleSubmit(handleForm)}>
        <div classeName="input">
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
        <div classeName="input">
          <TextField
            variant="outlined"
            id="category"
            label="Categoria"
            margin="normal"
            size="small"
            color="secondary"
            {...register("category")}
            error={!!errors.category}
            helperText={errors.category?.message}
          />
        </div>
        <div classeName="input">
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
        <div classeName="input">
          <TextField
            variant="outlined"
            id="frequency"
            label="Frequência"
            margin="normal"
            size="small"
            color="secondary"
            {...register("frequency")}
            error={!!errors.frequency}
            helperText={errors.frequency?.message}
          />
        </div>
        <div classeName="input">
          <TextField
            variant="outlined"
            id="achieved"
            label="Finalizado? true/false"
            margin="normal"
            size="small"
            color="secondary"
            {...register("achieved")}
            error={!!errors.achieved}
            helperText={errors.achieved?.message}
          />
        </div>
        <div classeName="input">
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
        </div>
        <div>
          <Button type="submit" variant="contained" color="secondary">
            {" "}
            Criar hábito
          </Button>
        </div>
      </form>
    </div>
  );
};
export default HabitsForm;
