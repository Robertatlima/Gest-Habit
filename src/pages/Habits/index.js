import "./style.css";

import axios from "axios";
import { useEffect, useState } from "react";
import { useAuth } from "../../providers/Auth";
import { useUser } from "../../providers/User";
import { useHistory } from "react-router-dom";
import HabitsForm from "../../components/HabitsForm";
import HabitCardMini from "../../components/HabitCardMini";
import { Dialog } from "@mui/material";
import { Button } from "@material-ui/core";
import { useHabits } from "../../providers/Habits";

const Habits = () => {
  const history = useHistory();

  const { auth } = useAuth();
  const { habits, setHabits } = useHabits();
  const [insertModal, setInsertModal] = useState(false);

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
  }, [insertModal]);

  // const theme = useTheme();
  // const fullScreen = useMediaQuery(theme.breakpoints.down("md"));

  const handleClickInsertModal = () => setInsertModal(true);
  const handleClickCloseInsertModal = () => setInsertModal(false);

  return (
    <>
      {auth ? (
        <div>
          <div>
            <Button variant={"contained"} onClick={handleClickInsertModal}>
              Novo Hábito
            </Button>
            <Button variant={"outlined"}>Seus Hábitos</Button>
            <Button variant={"contained"}>Encontrar</Button>
          </div>
          <ul>
            {habits?.map((habit) => {
              return (
                <li key={habit.id}>
                  <HabitCardMini habit={habit} />
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
            <HabitsForm
              handleClickCloseInsertModal={handleClickCloseInsertModal}
            />
          </Dialog>
        </div>
      ) : (
        history.push("/login")
      )}
    </>
  );
};

export default Habits;
