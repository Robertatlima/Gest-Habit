import { Dialog } from "@material-ui/core";
import { useEffect, useState } from "react";
import axios from "axios";
import GoalCard from "../GoalCard";

const GoalCardMini = ({ goal, setModal }) => {
  const [cardModal, setCardModal] = useState(false);

  // const theme = useTheme();
  // const fullScreen = useMediaQuery(theme.breakpoints.down("md"));

  const handleClickCardModal = () => setCardModal(true);
  const handleClickCloseCardModal = () => setCardModal(false);

  const token = localStorage.getItem("token");

  useEffect(() => {
    axios
      .get("https://kenzie-habits.herokuapp.com/goals/", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then(() => setModal(cardModal))
      .catch((err) => {
        console.log(err);
      });
  }, [cardModal]);

  return (
    <>
      <div className="minicard" onClick={handleClickCardModal}>
        <p>Título: {goal.title}</p>
        <p>Progresso: {goal.how_much_achieved} %</p>
      </div>

      <Dialog
        // fullScreen={fullScreen}
        open={cardModal}
        onClose={handleClickCloseCardModal}
        aria-labelledby="responsive-dialog-title"
      >
        <GoalCard
          goal={goal}
          handleClickCloseCardModal={handleClickCloseCardModal}
        />
      </Dialog>
    </>
  );
};

export default GoalCardMini;
