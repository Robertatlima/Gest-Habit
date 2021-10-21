import Activities from "../../components/Activities";
import CardProfile from "../../components/cardProfile";
import Goals from "../../components/Goals";
import { useGroupId } from "../../providers/GroupId";
import { Container, Content, ContainerPrincipal } from "./style.js";
import Button from "../../components/Button";
import { useHistory } from "react-router";

const GroupDetails = () => {
  const history = useHistory();
  const { groupId } = useGroupId();
  return (
    <>
      {groupId !== undefined ? (
        <ContainerPrincipal>
          <Content>
            <CardProfile />
            <div className="details">
              <h1>Detalhes do grupo</h1>
              <Button className="button" children="opções" />
            </div>
          </Content>

          <Container>
            <div className="groupdetailscontainer">
              <div className="actScroll">
                <Activities groupId={groupId} />
              </div>

              <div className="actScroll">
                <Goals groupId={groupId} />
              </div>
            </div>
          </Container>
        </ContainerPrincipal>
      ) : (
        history.push("/groups")
      )}
    </>
  );
};
export default GroupDetails;
