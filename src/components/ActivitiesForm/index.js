import { useHistory } from "react-router-dom";
import { Button, TextField } from "@material-ui/core";

import axios from "axios";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";

const ActivitiesForm = ({ groupId, handleClickCloseInsertModal }) => {
  const history = useHistory();

  const schema = yup.object().shape({
    title: yup.string().required("Campo Obrigatório"),
    realization_time: yup.string().required("Campo Obrigatório"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const handleForm = (data) => {
    const requestData = {
      title: data.title,
      realization_time: data.realization_time.concat("T00:00:00Z"),
      group: groupId,
    };

    const token = localStorage.getItem("token");

    axios
      .post("https://kenzie-habits.herokuapp.com/activities/", requestData, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then(() => {
        history.push(`/groupDetails`);
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
            id="realization_time"
            label="YYYY-DD-MM"
            margin="normal"
            size="small"
            color="secondary"
            {...register("realization_time")}
            error={!!errors.realization_time}
            helperText={errors.realization_time?.message}
          />
        </div>
        <Button type="submit" variant="contained" color="secondary">
          Criar Atividade
        </Button>
      </form>
    </>
  );
};

export default ActivitiesForm;
