import { Button } from "@material-ui/core";
import axios from "axios";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import CardProfile from "../../components/cardProfile";
import Header from "../../components/NavBar";
import { useUser } from "../../providers/User";

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
      <Header logout />
      <CardProfile />
      <div>
        <Link to="/habits">
          <Button variant="contained">Habits</Button>
        </Link>

        <Link to="/groups">
          <Button variant="contained">Groups</Button>
        </Link>
      </div>
    </>
  );
};

export default Dashboard;
