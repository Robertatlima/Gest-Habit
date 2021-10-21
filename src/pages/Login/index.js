import * as C from "./styles";
import { Link, useHistory, Redirect } from "react-router-dom";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { TextField } from "@material-ui/core";
import axios from "axios";
import jwt_decode from "jwt-decode";
import { useUser } from "../../providers/User";
import { useAuth } from "../../providers/Auth";
import logo from "../../assets/img/Logo.png";
import svg from "../../assets/img/fundoHome.png";
import { Button } from "@material-ui/core";
import Header from "../../components/NavBar";
// import Button from "../../components/Button";
const Login = () => {
  const { setUser } = useUser();
  const { auth, setAuth } = useAuth();

  const history = useHistory();

  const schema = yup.object().shape({
    username: yup.string().required("Campo Obrigatório"),
    password: yup.string().required("Campo Obrigatório"),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const handleForm = (data) => {
    axios
      .post("https://kenzie-habits.herokuapp.com/sessions/", data)
      .then((response) => {
        localStorage.clear();
        localStorage.setItem("token", response.data.access);

        const { user_id } = jwt_decode(localStorage.getItem("token"));

        axios
          .get(`https://kenzie-habits.herokuapp.com/users/${user_id}/`)
          .then((response) => {
            setUser({
              id: response.data.id,
              username: response.data.username,
              email: response.data.email,
            });
          })
          .catch((err) => {
            console.log(err);
          });

        setAuth(true);

        history.push("/habits");
      })
      .catch((err) => console.log(err));
  };

  if (auth) {
    history.push("/habits");
  }
  return (
    <>
      <Header destiny="login" />

      <C.LoginContainer>
        <div>
          <h1>
            Gest <span>Habit</span>
          </h1>
        </div>
        <C.Container>
          <form className="formulario" onSubmit={handleSubmit(handleForm)}>
            <div className="formulario-title">
              <h2>Login</h2>
            </div>
            <div className="loginInput">
              <TextField
                className="loginInput-field"
                variant="filled"
                fullWidth
                id="user"
                label="Usuário"
                margin="normal"
                size="small"
                color="secondary"
                InputProps={{ disableUnderline: true }}
                {...register("username")}
                error={!!errors.username}
                helperText={errors.username?.message}
              />
            </div>
            <div className="loginInput">
              <TextField
                className="loginInput-field"
                variant="filled"
                fullWidth
                InputProps={{ disableUnderline: true }}
                placeholder="senha"
                id="password"
                type="password"
                label="Senha"
                margin="normal"
                size="small"
                color="secondary"
                {...register("password")}
                error={!!errors.password}
                helperText={errors.password?.message}
              />
            </div>

            <div className="btnBox">
              <Button type="submit" variant="contained" color="secondary">
                {" "}
                Logar
              </Button>
            </div>
            <div className="btnBox btnBox-cadastrar">
              <Button
                onClick={() => history.push("/signup")}
                variant="contained"
                color="secondary"
              >
                {" "}
                Cadastrar
              </Button>
            </div>
          </form>
        </C.Container>
      </C.LoginContainer>
    </>
  );
};

export default Login;
