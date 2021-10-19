import axios from "axios";

const HabitCard = ({ habit, handleClickCloseCardModal }) => {
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
    <span>
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
      <h1>Completo:</h1>
      <p>{habit.achieved ? "Completo" : "Incompleto"}</p>
      <h1>Progresso:</h1>
      <p>{habit.how_much_achieved} %</p>
      <button onClick={handleEditar}>Editar</button>
      <button onClick={handleDelete}>Excluir</button>
    </span>
  );
};

export default HabitCard;
