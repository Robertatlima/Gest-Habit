import Activities from "../../components/Activities";
import CardProfile from "../../components/cardProfile";
import Goals from "../../components/Goals";
import { useGroupId } from "../../providers/GroupId";
import { Container, Content } from "./style.js";
import Button from "../../components/Button";
import { useHistory } from "react-router";
import GroupDetailsCardMini from "../../components/GroupDetailsCardMini";

const GroupDetails = () => {
  const history = useHistory();
  const { groupId } = useGroupId();
  return (
    <>
      {groupId !== undefined ? (
        <>
          <Content>
            <GroupDetailsCardMini groupId={groupId} />
            <CardProfile />
          </Content>

          <Container>
            <div className="groupdetailscontainer">
              <Activities groupId={groupId} />
              <Goals groupId={groupId} />
            </div>
          </Container>
        </>
      ) : (
        history.push("/groups")
      )}
    </>
  );
};
export default GroupDetails;
