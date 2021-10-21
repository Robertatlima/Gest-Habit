import { MenuItem, TextField } from "@material-ui/core";
import axios from "axios";
import { useUser } from "../../providers/User";
import Button from "../Button";
import { useState } from "react";

const categories = [
  { id: 1, value: "Corpo e mente saudáveis" },
  { id: 2, value: "Foco, força e fé" },
  { id: 3, value: "Me poupe" },
  { id: 4, value: "Boa noite" },
  { id: 5, value: "Ficando em forma" },
  { id: 6, value: "Lar, doce lar" },
];

const GroupsForm = ({ handleClickInsertModal }) => {
  const [title, setTitle] = useState();

  const handleTitle = (event) => {
    setTitle(event.target.value);
  };

  const [category, setCategory] = useState("Boa noite");

  const handleCategory = (event) => {
    setCategory(event.target.value);
  };

  const [description, setDescription] = useState();

  const handleDescription = (event) => {
    setDescription(event.target.value);
  };

  const { user } = useUser();

  const handleForm = () => {
    const requestData = {
      name: title,
      category: category,
      description: "description",
      user: user.id,
    };

    const token = localStorage.getItem("token");

    axios
      .post("https://kenzie-habits.herokuapp.com/groups/", requestData, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        handleClickInsertModal();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="modalContainer">
      <div className="modalHeader">
        <h3>Cadastrar grupo</h3>
        <div type="button" onClick={handleClickInsertModal}>
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
            children={"Cadastrar grupo"}
            onClick={handleForm}
          />
        </div>
      </form>
    </div>
  );
};
export default GroupsForm;
