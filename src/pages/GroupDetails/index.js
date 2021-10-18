import "./style.css";

import Activities from "../../components/Activities";
import Goals from "../../components/Goals";

const GroupDetails = ({ groupId = 106 }) => {
  return (
    <>
      <h1>DETALHES DO GRUPO X</h1>
      <div className="groupdetailscontainer">
        <Activities groupId={groupId} />
        <Goals groupId={groupId} />
      </div>
    </>
  );
};
export default GroupDetails;
