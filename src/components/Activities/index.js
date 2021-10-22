import { Dialog } from "@material-ui/core";
import axios from "axios";
import { useEffect, useState } from "react";
import ActivitiesForm from "../ActivitiesForm";
import ActivityCardMini from "../ActivityCardMini";
import { Container } from "./styles.js";

const Activities = ({ groupId }) => {
  const [activities, setActivities] = useState();
  const [insertModal, setInsertModal] = useState(false);
  const [excludeModal, setExcludeModal] = useState(false);
  // const theme = useTheme();
  // const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

  const token = localStorage.getItem("token");

  useEffect(() => {
    axios
      .get(
        `https://kenzie-habits.herokuapp.com/activities/?group=${groupId}&page=1`,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      )
      .then((response) => setActivities(response.data.results))
      .catch((err) => {
        console.log(err);
      });
  }, [insertModal, excludeModal]);

  const handleClickInsertModal = () => setInsertModal(true);
  const handleClickCloseInsertModal = () => setInsertModal(false);

  return (
    <div>
      <Container>
        <div className="cardAtv">
          <button className="button" onClick={handleClickInsertModal}>
            Nova atividade
          </button>
        </div>
        <ul>
          {activities?.map((activity) => {
            return (
              <li key={activity.id}>
                <ActivityCardMini
                  setActivities={setActivities}
                  setModal={setExcludeModal}
                  activity={activity}
                />
              </li>
            );
          })}
        </ul>
        <Dialog
          // fullScreen={fullScreen}
          open={insertModal}
          onClose={handleClickCloseInsertModal}
          aria-labelledby="responsive-dialog-title"
        >
          <ActivitiesForm
            groupId={groupId}
            handleClickCloseInsertModal={handleClickCloseInsertModal}
          />
        </Dialog>
      </Container>
    </div>
  );
};
export default Activities;
