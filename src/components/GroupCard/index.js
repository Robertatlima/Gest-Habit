import { useHistory } from "react-router";
import { useGroupId } from "../../providers/GroupId";
import * as C from "./styles";

const Group = ({ group }) => {
  const { setGroupId } = useGroupId();
  const history = useHistory();

  const handleClick = () => {
    setGroupId(group.id);
    history.push(`/groupDetails/`);
  };

  return (
    <C.Container
      className="largeCardContainer"
      onClick={() => handleClick(group)}
    >
      <h1>{group.name}</h1>
      <p>Categoria: {group.category}</p>
      <p>Dificuldade: {group.description}</p>
    </C.Container>
  );
};

export default Group;
