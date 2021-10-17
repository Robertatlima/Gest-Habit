import axios from "axios";
import { useHistory } from "react-router";

const Group = ({ group }) => {
  const history = useHistory();

  const token = localStorage.getItem("token");

  const handleDelete = () => {
    axios
      .delete(
        `https://kenzie-habits.herokuapp.com/groups/${group.id}/unsubscribe/`,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      )
      .then(history.push("/groups"))
      .catch((err) => {
        console.log(err);
      });
  };

  const handleClick = (group) => {
    history.push(`/groups/${group.id}`);
  };

  return (
    <div onClick={() => handleClick(group)}>
      <h1>
        Nome: {group.name} id:{group.id}
      </h1>
      <p>Categoria: {group.category}</p>
      <p>Dificuldade: {group.description}</p>

      <button onClick={handleDelete}>Deletar</button>
    </div>
  );
};

export default Group;
