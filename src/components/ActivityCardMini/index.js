import { Dialog } from "@material-ui/core";
import { useEffect, useState } from "react";
import axios from "axios";
import ActivityCard from "../ActivityCard";

const ActivityCardMini = ({ activity, setModal }) => {
  const [cardModal, setCardModal] = useState(false);

  // const theme = useTheme();
  // const fullScreen = useMediaQuery(theme.breakpoints.down("md"));

  const handleClickCardModal = () => setCardModal(true);
  const handleClickCloseCardModal = () => setCardModal(false);

  const token = localStorage.getItem("token");

  useEffect(() => {
    axios
      .get("https://kenzie-habits.herokuapp.com/activities/", {
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
        <p>Título: {activity.title}</p>
        <p>
          Data limite:{" "}
          {activity.realization_time.split("").slice(0, 10).join("")}
        </p>
      </div>

      <Dialog
        // fullScreen={fullScreen}
        open={cardModal}
        onClose={handleClickCloseCardModal}
        aria-labelledby="responsive-dialog-title"
      >
        <ActivityCard
          activity={activity}
          handleClickCloseCardModal={handleClickCloseCardModal}
        />
      </Dialog>
    </>
  );
};

export default ActivityCardMini;
