import axios from "axios";

const GoalCard = ({ goal, handleClickCloseCardModal }) => {
  const token = localStorage.getItem("token");

  const handleDelete = () => {
    axios
      .delete(`https://kenzie-habits.herokuapp.com/goals/${goal.id}/`, {
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
      <p>{goal.title}</p>
      <h1>Dificuldade:</h1>
      <p>{goal.difficulty}</p>

      <h1>Completo:</h1>
      <p>{goal.achieved ? "Completo" : "Incompleto"}</p>
      <h1>Progresso:</h1>
      <p>{goal.how_much_achieved} %</p>
      <button onClick={handleEditar}>Editar</button>
      <button onClick={handleDelete}>Excluir</button>
    </span>
  );
};

export default GoalCard;
