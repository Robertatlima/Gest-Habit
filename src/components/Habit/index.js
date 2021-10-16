import axios from "axios";
import { useHistory } from "react-router";

const Habit = ({ habit }) => {
  const history = useHistory();

  const token = localStorage.getItem("token");

  const handleDelete = () => {
    axios
      .delete(`https://kenzie-habits.herokuapp.com/habits/${habit.id}/`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then(history.go(0))
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <h1>
        Título: {habit.title} id:{habit.id}
      </h1>
      <p>Categoria: {habit.category}</p>
      <p>Dificuldade: {habit.difficulty}</p>
      <p>Completa: {String(habit.achieved)}</p>
      <p>Qutd feita: {habit.how_much_achieved}</p>
      <button onClick={handleDelete}>Deletar</button>
    </>
  );
};

export default Habit;
