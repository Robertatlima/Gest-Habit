import { Button } from "@material-ui/core";
import axios from "axios";
import { useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { useAuth } from "../../providers/Auth";
import { useUser } from "../../providers/User";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const history = useHistory();
  const { user, setUser } = useUser();
  const { auth } = useAuth();

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
 feature/groups
      <div>
        <h1>ID do usuário para buscar na API: {user.id}</h1>
        {auth ? (
          <h2>State isLogged: true </h2>
        ) : (
          <h2>State isLogged: false </h2>
        )}

        <Link to="/groups">
          <button>Groups</button>
        </Link>
        <Link to="/allGroups">
          <button>Descobrir</button>
        </Link>
      </div>

      {auth ? (
        <div>
          <h1>ID do usuário: {user.id}</h1>
          <h1>Nome do usuário: {user.username}</h1>
          <h1>email do usuário: {user.email}</h1>
          <Link to="/habits">
            <Button variant="contained">Habits</Button>
          </Link>
        </div>
      ) : (
        history.push("/login")
      )}
 developer
    </>
  );
};

export default Dashboard;
