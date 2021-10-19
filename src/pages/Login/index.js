import * as C from "./styles";
import { Link, useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { TextField, Button } from "@material-ui/core";
import axios from "axios";
import jwt_decode from "jwt-decode";
import { useUser } from "../../providers/User";
import { useAuth } from "../../providers/Auth";

const Login = () => {
  const { setUser } = useUser();
  const { setAuth } = useAuth();

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
        setUser({ id: user_id });

        setAuth(true);

        history.push("/dashboard");
      })
      .catch((err) => console.log(err));
  };

  return (
    <C.Container>
      <form className="formulario" onSubmit={handleSubmit(handleForm)}>
        <div>
          <TextField
            variant="outlined"
            id="email"
            label="Usuário"
            margin="normal"
            size="small"
            color="secondary"
            {...register("username")}
            error={!!errors.username}
            helperText={errors.username?.message}
          />
        </div>
        <div>
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

        <div>
          <Button type="submit" variant="contained" color="secondary">
            {" "}
            Entrar
          </Button>
        </div>
        <p>
          Novo usuário? <Link to="/signup">Cadastre-se</Link>
        </p>
      </form>
    </C.Container>
  );
};

export default Login;
