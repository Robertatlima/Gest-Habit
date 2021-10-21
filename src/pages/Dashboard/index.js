import axios from "axios";
import { useEffect } from "react";
import { useUser } from "../../providers/User";
import Habits from "../Habits";
const Dashboard = () => {
  const { user, setUser } = useUser();

  useEffect(() => {
    axios
      .get(`https://kenzie-habits.herokuapp.com/users/${user.id}/`)
      .then((response) => {
        setUser({
          id: response.data.id,
          username: response.data.username,
          email: response.data.email,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  });

  return (
    <>
      <Habits />
    </>
  );
};

export default Dashboard;
