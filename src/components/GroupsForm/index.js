import { useHistory, Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { TextField, Button } from "@material-ui/core";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";
import { useUser } from "../../providers/User";
import { AiOutlineCloseCircle } from "react-icons/ai";

const GroupsForm = ({ handleClickInsertModal }) => {
  const history = useHistory();

  const schema = yup.object().shape({
    name: yup.string().required("Campo Obrigatório"),
    category: yup.string().required("Campo Obrigatório"),
    description: yup.string().required("Campo Obrigatório"),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const { user } = useUser();

  const handleForm = (data) => {
    const requestData = {
      name: data.name,
      category: data.category,
      description: data.description,
      user: user.id,
    };

    const token = localStorage.getItem("token");

    axios
      .post("https://kenzie-habits.herokuapp.com/groups/", requestData, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        history.push(`/groups`);
        handleClickInsertModal();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <h1>Novo grupo</h1>
      <AiOutlineCloseCircle onClick={handleClickInsertModal} />
      <form className="formulario" onSubmit={handleSubmit(handleForm)}>
        <div classeName="input">
          <TextField
            variant="outlined"
            id="name"
            label="Nome do grupo "
            margin="normal"
            size="small"
            color="secondary"
            {...register("name")}
            error={!!errors.name}
            helperText={errors.name?.message}
          />
        </div>
        <div classeName="input">
          <h2>Selecione uma categoria</h2>
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
          <h2>Descreva seu grupo</h2>
          <TextField
            variant="outlined"
            id="description"
            label="Descrição"
            margin="normal"
            size="small"
            color="secondary"
            {...register("description")}
            error={!!errors.description}
            helperText={errors.description?.message}
          />
        </div>

        <div>
          <Button type="submit" variant="contained" color="secondary">
            {" "}
            Concluir
          </Button>
        </div>
      </form>
    </div>
  );
};
export default GroupsForm;
