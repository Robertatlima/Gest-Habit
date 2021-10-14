import * as C from "./styles";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { TextField, Button } from "@material-ui/core";

export const Login = () => {
  const schema = yup.object().shape({
    name: yup.string().required("Campo Obrigatório"),
    email: yup.string().email("Email Invalido").required("Campo Obrigatório"),
    password: yup
      .string()
      .min(8, "Senha inválida")
      .required("Campo Obrigatório")
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
        "Mínimo de 8 digitos, um caracter especial e uma letra maiúscula"
      ),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password")], "Email não confere"),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  return (
    <C.Container>
      <form className="formulario" onSubmit={handleSubmit()}>
        <div>
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
        <div>
          <TextField
            variant="outlined"
            id="password"
            label="Password"
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
            Send
          </Button>
        </div>
        <p>
          Don't have an account? <Link to="/signup">sign up</Link>
        </p>
      </form>
    </C.Container>
  );
};
