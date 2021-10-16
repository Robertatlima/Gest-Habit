import { useAuth } from "../../providers/Auth";
import { useUser } from "../../providers/User";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const { user } = useUser();
  const { auth } = useAuth();

  return (
    <>
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
    </>
  );
};

export default Dashboard;
