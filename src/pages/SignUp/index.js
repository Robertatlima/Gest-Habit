import * as C from "./styles";
import { Link, useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import { TextField, Button } from "@material-ui/core";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";
import Header from "../../components/NavBar";
import { toast } from "react-toastify";
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
        history.push(`/login`);
        toast.success("Seja bem vindo a plataforma do Gest Habit");
      })
      .catch((err) => {
        toast.error("Erro ao se cadastrar. Confira os dados informados");
      });
  };

  return (
    <>
      <div className="navBar">
        <Header destiny="login" name="register" />
      </div>
      <C.RegisterContainer>
        <div className="title">
          <h1>
            Gest <span>Habit</span>
          </h1>
        </div>
        <C.Container>
          <form className="formulario" onSubmit={handleSubmit(handleForm)}>
            <div className="formulario-title">
              <h2>Cadastrar</h2>
            </div>
            <div className="registerInput">
              <TextField
                className="registerInput-field"
                variant="filled"
                fullWidth
                InputProps={{ disableUnderline: true }}
                id="name"
                label="Nome"
                type="name"
                margin="normal"
                size="small"
                color="secondary"
                {...register("username")}
                error={!!errors.username}
                helperText={errors.username?.message}
              />
            </div>
            <div className="registerInput">
              <TextField
                classeName="registerInput-field"
                variant="filled"
                fullWidth
                InputProps={{ disableUnderline: true }}
                id="email"
                label="Email"
                type="email"
                margin="normal"
                size="small"
                color="secondary"
                {...register("email")}
                error={!!errors.email}
                helperText={errors.email?.message}
              />
            </div>
            <div className="registerInput">
              <TextField
                classeName="registerInput-field"
                variant="filled"
                fullWidth
                InputProps={{ disableUnderline: true }}
                id="password"
                label="Senha"
                type="password"
                margin="normal"
                size="small"
                color="secondary"
                {...register("password")}
                error={!!errors.password}
                helperText={errors.password?.message}
              />
            </div>
            <div className="registerInput">
              <TextField
                classeName="registerInput-field"
                variant="filled"
                fullWidth
                InputProps={{ disableUnderline: true }}
                id="confirmPassword"
                type="password"
                label="Confirmar senha"
                margin="normal"
                size="small"
                color="secondary"
                {...register("confirmPassword")}
                error={!!errors.confirmPassword}
                helperText={errors.confirmPassword?.message}
              />
            </div>
            <div className="btnBox">
              <Button type="submit" variant="contained" color="secondary">
                {" "}
                Cadastrar
              </Button>
            </div>
            <div className="btnBox btnBox-login">
              <Button
                onClick={() => history.push("/login")}
                variant="contained"
                color="secondary"
              >
                {" "}
                Login
              </Button>
            </div>
          </form>
        </C.Container>
        <div className="title-register">
          <h1>
            <span>Feel good with </span>
            your Habits
          </h1>
        </div>
      </C.RegisterContainer>
    </>
  );
};
export default SignUp;
