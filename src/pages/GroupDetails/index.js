import "./style.css";

import Activities from "../../components/Activities";
import Goals from "../../components/Goals";
import { useGroupId } from "../../providers/GroupId";

const GroupDetails = () => {
  const { groupId } = useGroupId();
  return (
    <>
      <h1>Detalhes do grupo</h1>
      <div className="groupdetailscontainer">
        <Activities groupId={groupId} />
        <Goals groupId={groupId} />
      </div>
    </>
  );
};
export default GroupDetails;
