import { Dialog } from "@material-ui/core";
import axios from "axios";
import { useEffect, useState } from "react";
import GoalCardMini from "../GoalCardMini";
import GoalsForm from "../GoalsForm";
import { Container } from "./style";

const Goals = ({ groupId }) => {
  const [goals, setGoals] = useState();
  const [insertModal, setInsertModal] = useState(false);
  const [excludeModal, setExcludeModal] = useState(false);
  // const theme = useTheme();
  // const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

  const token = localStorage.getItem("token");

  useEffect(() => {
    axios
      .get(
        `https://kenzie-habits.herokuapp.com/goals/?group=${groupId}&page=1`,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      )
      .then((response) => setGoals(response.data.results))
      .catch((err) => {
        console.log(err);
      });
  }, [insertModal, excludeModal]);

  const handleClickInsertModal = () => setInsertModal(true);
  const handleClickCloseInsertModal = () => setInsertModal(false);

  return (
    <Container>
      <button className="button" onClick={handleClickInsertModal}>
        Nova meta
      </button>
      <ul>
        {goals?.map((goal) => {
          return (
            <li key={goal.id}>
              <GoalCardMini
                setGoals={setGoals}
                setModal={setExcludeModal}
                goal={goal}
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
        <GoalsForm
          groupId={groupId}
          handleClickCloseInsertModal={handleClickCloseInsertModal}
        />
      </Dialog>
    </Container>
  );
};
export default Goals;
