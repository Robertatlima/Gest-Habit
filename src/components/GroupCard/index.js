import axios from "axios";
import { useHistory } from "react-router";
import { useGroupId } from "../../providers/GroupId";
import * as C from "./styles";

const Group = ({ group }) => {
  const { setGroupId } = useGroupId();
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

  const handleClick = () => {
    setGroupId(group.id);
    history.push(`/groupDetails/`);
  };

  return (
    <C.Container className='largeCardContainer' onClick={() => handleClick(group)}>
      <h1>{group.name}</h1>
      <p>Categoria: {group.category}</p>
      <p>Dificuldade: {group.description}</p>

      {/* <button onClick={handleDelete}>Excluir grupo</button>
      <button>Editar grupo</button> */}
    </C.Container>
  );
};

export default Group;
