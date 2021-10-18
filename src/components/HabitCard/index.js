import axios from "axios";
import { useHistory } from "react-router";

const HabitCard = ({ habit, handleClickCloseCardModal }) => {
  const history = useHistory();

  const token = localStorage.getItem("token");

  const handleDelete = () => {
    axios
      .delete(`https://kenzie-habits.herokuapp.com/habits/${habit.id}/`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then(() => handleClickCloseCardModal())
      .catch((err) => {
        console.log(err);
      });
  };

  const handleEditar = () => {};

  return (
    <>
      <h1>Detalhes do Hábito</h1>
      <button onClick={handleClickCloseCardModal}>X - Fechar</button>
      <h1>Título:</h1>
      <p>{habit.title}</p>
      <h1>Dificuldade:</h1>
      <p>{habit.difficulty}</p>
      <h1>Categoria:</h1>
      <p>{habit.category}</p>
      <h1>Frequência:</h1>
      <p>{habit.frequency}</p>
      <button onClick={handleEditar}>Editar</button>
      <button onClick={handleDelete}>Excluir</button>
    </>
  );
};

export default HabitCard;
