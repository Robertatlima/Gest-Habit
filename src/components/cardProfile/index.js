import { useUser } from "../../providers/User";
import { useAuth } from "../../providers/Auth";
import { useHistory, Link } from "react-router-dom";
import imgProfile from "../../assets/img/profile.jpg";
import * as C from "./styles.js";
import Button from "../Button";
import { useState } from "react";
import axios from "axios";
import { TextField } from "@mui/material";
import { toast } from "react-toastify";
const CardProfile = () => {
  const history = useHistory();
  const { user, setUser } = useUser();
  const { auth } = useAuth();
  const [edit, setEdit] = useState(true);

  const handleEdit = () => {
    setEdit(!edit);
  };

  const [name, setName] = useState(user.username);

  const handleName = (event) => {
    setName(event.target.value);
  };

  const handleConfirm = () => {
    const requestData = {
      username: name,
    };

    const token = localStorage.getItem("token");

    axios
      .patch(
        `https://kenzie-habits.herokuapp.com/users/${user.id}/`,
        requestData,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      )
      .then((response) => {
        setUser({
          id: response.data.id,
          username: response.data.username,
          email: response.data.email,
        });
      })
      .then(() => {
        setEdit(true);
        toast.success("Uhu! Seu username foi atualizado ");
      })
      .catch((err) => {
        toast.success(" Não foi possivel atualizar seu username ");
      });
  };

  return (
    <C.Container>
      {auth ? (
        <>
          <div className="profile">
            <div className="profile-left">
              <img src={`${imgProfile}`} alt="" />
            </div>
            <div className="profile-right">
              {edit ? (
                <>
                  <h1>{user.username}</h1>
                  <Button
                    className="editbutton"
                    children={"Editar perfil"}
                    onClick={handleEdit}
                  />
                </>
              ) : (
                <>
                  <TextField
                    defaultValue={user.username}
                    onChange={handleName}
                    variant="filled"
                    id="title"
                    label="Novo nome"
                    margin="normal"
                    size="medium"
                    color="primary"
                  />
                  <Button
                    className="editbutton"
                    schema={edit}
                    children={"Atualizar"}
                    onClick={handleConfirm}
                  />
                </>
              )}
            </div>
          </div>
          <hr />

          <div className="cards">
            <Link className="links" to="/habits">
              <div className="card-habits">
                <h1>Hábitos</h1>
              </div>
            </Link>
            <Link className="links" to="/groups">
              <div className="card-groups">
                <h1>Grupos</h1>
              </div>
            </Link>
          </div>
        </>
      ) : (
        history.push("/login")
      )}
    </C.Container>
  );
};
export default CardProfile;
