import * as C from "./styles";
import { Link, useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import { TextField, Button } from "@material-ui/core";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";

const SignUp = () => {
  const history = useHistory();

  const schema = yup.object().shape({
    username: yup
      .string()
      .matches(/^[A-Za-z\s]+$/, "Nome deve ter apenas letras")
      .required("Campo Obrigatório"),
    email: yup.string().email("Email Invalido").required("Campo Obrigatório"),
    password: yup
      .string()
      .min(8, "Mínimo 8 caracteres")
      .required("Campo Obrigatório")
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
        "Mínimo de 8 digitos, um caracter especial e uma letra maiúscula"
      ),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password")], "Senha não confere"),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const handleForm = (data) => {
    const requestData = {
      username: data.username,
      email: data.email,
      password: data.password,
    };

    axios
      .post("https://kenzie-habits.herokuapp.com/users/", requestData)
      .then((response) => {
        console.log(response);
        // history.push(`/`);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <C.Container>
      <form className="formulario" onSubmit={handleSubmit(handleForm)}>
        <div classeName="input">
          <TextField
            variant="outlined"
            id="name"
            label="Nome"
            margin="normal"
            size="small"
            color="secondary"
            {...register("username")}
            error={!!errors.username}
            helperText={errors.username?.message}
          />
        </div>
        <div classeName="input">
          <TextField
            variant="outlined"
            id="email"
            label="Email"
            margin="normal"
            size="small"
            color="secondary"
            {...register("email")}
            error={!!errors.email}
            helperText={errors.email?.message}
          />
        </div>
        <div classeName="input">
          <TextField
            variant="outlined"
            id="password"
            label="Senha"
            margin="normal"
            size="small"
            color="secondary"
            {...register("password")}
            error={!!errors.password}
            helperText={errors.password?.message}
          />
        </div>
        <div classeName="input">
          <TextField
            variant="outlined"
            id="confirmPassword"
            label="Confirmar senha"
            margin="normal"
            size="small"
            color="secondary"
            {...register("confirmPassword")}
            error={!!errors.confirmPassword}
            helperText={errors.confirmPassword?.message}
          />
        </div>
        <div>
          <Button type="submit" variant="contained" color="secondary">
            {" "}
            Cadastrar
          </Button>
        </div>
        <p>
          Já possui uma conta? <Link to="/login">Entrar</Link>
        </p>
      </form>
    </C.Container>
  );
};
export default SignUp;
