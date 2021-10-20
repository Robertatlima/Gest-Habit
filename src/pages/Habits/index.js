import * as C from "./styles.js";
import CardProfile from "../../components/cardProfile";
import axios from "axios";
import { useEffect, useState } from "react";
import { useAuth } from "../../providers/Auth";
import { useHistory } from "react-router-dom";
import HabitsForm from "../../components/HabitsForm";
import HabitCardMini from "../../components/HabitCardMini";
import { Dialog } from "@mui/material";
import { TextField } from "@material-ui/core";
import { useHabits } from "../../providers/Habits";
import Button from "../../components/Button";
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
    <C.Container>
      <CardProfile />
      {auth ? (
        <C.ContainerPrincipal>
          <C.ButtonsContainer>
            <Button
              className="button"
              variant={"contained"}
              onClick={handleClickInsertModal}
            >
              Novo Hábito
            </Button>
            {/* <TextField id="search" variant="outlined" /> */}
          </C.ButtonsContainer>
          <C.ListContainer>
            {habits?.map((habit) => {
              return (
                <li key={habit.id}>
                  <HabitCardMini habit={habit} />
                </li>
              );
            })}
          </C.ListContainer>
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
        </C.ContainerPrincipal>
      ) : (
        history.push("/login")
      )}
    </C.Container>
  );
};

export default Habits;
