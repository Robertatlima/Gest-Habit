import { MenuItem, TextField } from "@material-ui/core";
import axios from "axios";
import { useUser } from "../../providers/User";
import Button from "../Button";
import { useState } from "react";
import { useHistory } from "react-router";

const categories = [
  { id: 1, value: "Corpo e mente saudáveis" },
  { id: 2, value: "Foco, força e fé" },
  { id: 3, value: "Me poupe" },
  { id: 4, value: "Boa noite" },
  { id: 5, value: "Ficando em forma" },
  { id: 6, value: "Lar, doce lar" },
];

const GroupDetailsCard = ({ group, handleClickCloseModal }) => {
  const history = useHistory();
  const [title, setTitle] = useState(group.name);

  const handleTitle = (event) => {
    setTitle(event.target.value);
  };

  const [category, setCategory] = useState(group.category);

  const handleCategory = (event) => {
    setCategory(event.target.value);
  };

  const [description, setDescription] = useState(group.description);

  const handleDescription = (event) => {
    setDescription(event.target.value);
  };

  const { user } = useUser();

  const handleForm = () => {
    const requestData = {
      name: title,
      category: category,
      description: description,
      user: user.id,
    };

    const token = localStorage.getItem("token");

    axios
      .patch(
        `https://kenzie-habits.herokuapp.com/groups/${group.id}/`,
        requestData,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      )
      .then(() => {
        handleClickCloseModal();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleDelete = () => {
    const token = localStorage.getItem("token");
    axios
      .delete(
        `https://kenzie-habits.herokuapp.com/groups/${group.id}/`,

        {
          headers: { Authorization: `Bearer ${token}` },
        }
      )
      .then((response) => {
        handleClickCloseModal();
        history.push("/groups");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="modalContainer">
      <div className="modalHeader">
        <h3>Cadastrar grupo</h3>
        <div type="button" onClick={handleClickCloseModal}>
          X
        </div>
      </div>
      <form className="formulario">
        <div className="input">
          <TextField
            fullWidth
            value={title}
            onChange={handleTitle}
            variant="filled"
            id="title"
            label="Nome do grupo"
            margin="normal"
            size="medium"
            color="primary"
          />
        </div>
        <div className="input">
          <TextField
            fullWidth
            select
            value={category}
            onChange={handleCategory}
            variant="filled"
            id="category"
            label="Categoria"
            margin="normal"
            size="medium"
            color="primary"
          >
            {categories.map((option) => (
              <MenuItem key={option.id} value={option.value}>
                {option.value}
              </MenuItem>
            ))}
          </TextField>
        </div>
        <div classeName="input">
          <TextField
            fullWidth
            multiline
            rows={4}
            value={description}
            onChange={handleDescription}
            variant="filled"
            id="description"
            label="Descrição do grupo"
            margin="normal"
            size="medium"
            color="primary"
          />
        </div>
        <div>
          <Button
            className="submitbutton"
            schema={false}
            children={"Salvar informações"}
            onClick={handleForm}
          />
        </div>
        <div>
          <Button
            className="submitbutton"
            schema={true}
            children={"Excluir grupo"}
            onClick={handleDelete}
          />
        </div>
      </form>
    </div>
  );
};
export default GroupDetailsCard;
