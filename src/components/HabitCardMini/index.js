import { Dialog } from "@material-ui/core";
import { useEffect, useState } from "react";
import HabitCard from "../HabitCard";
import axios from "axios";
import { useHabits } from "../../providers/Habits";

const HabitCardMini = ({ habit }) => {
  const [cardModal, setCardModal] = useState(false);
  const { setHabits } = useHabits();

  // const theme = useTheme();
  // const fullScreen = useMediaQuery(theme.breakpoints.down("md"));

  const token = localStorage.getItem("token");

  useEffect(() => {
    axios
      .get("https://kenzie-habits.herokuapp.com/habits/personal/", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => setHabits(response.data))
      .catch((err) => {
        console.log(err);
      });
  }, [cardModal]);

  const handleClickCardModal = () => setCardModal(true);
  const handleClickCloseCardModal = () => setCardModal(false);

  return (
    <>
      <div className="minicard" onClick={handleClickCardModal}>
        <h2> {habit.title}</h2>
        <p>Categoria: {habit.category}</p>
      </div>

      <Dialog
        // fullScreen={fullScreen}
        open={cardModal}
        onClose={handleClickCloseCardModal}
        aria-labelledby="responsive-dialog-title"
      >
        <HabitCard
          habit={habit}
          handleClickCloseCardModal={handleClickCloseCardModal}
        />
      </Dialog>
    </>
  );
};

export default HabitCardMini;
