import axios from "axios";

const ActivityCard = ({ activity, handleClickCloseCardModal }) => {
  const token = localStorage.getItem("token");

  const handleDelete = () => {
    axios
      .delete(
        `https://kenzie-habits.herokuapp.com/activities/${activity.id}/`,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      )
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
      <p>{activity.title}</p>
      <h1>Data limite:</h1>
      <p>{activity.realization_time.split("").slice(0, 10).join("")}</p>

      <button onClick={handleEditar}>Editar</button>
      <button onClick={handleDelete}>Excluir</button>
    </span>
  );
};

export default ActivityCard;
