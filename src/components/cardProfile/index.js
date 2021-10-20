import { useUser } from "../../providers/User";
import { useAuth } from "../../providers/Auth";
import { useHistory, Link } from "react-router-dom";
import imgProfile from "../../assets/img/profile.jpg";
import * as C from "./styles.js";

const CardProfile = () => {
  const history = useHistory();
  const { user, setUser } = useUser();
  const { auth } = useAuth();

  return (
    <C.Container>
      {auth ? (
        <>
          <div className="profile">
            <div className="profile-left">
              <img src={`${imgProfile}`} alt="" />
            </div>
            <div className="profile-right">
              <h1>{user.username}</h1>
              <span>Editar perfil</span>
            </div>
          </div>
          <hr />

          <div className="cards">
            <Link className="links" to="habits">
              <div className="card-habits">
                <h1>Habits</h1>
              </div>
            </Link>
            <Link className="links" to="groups">
              <div className="card-groups">
                <h1>Groups</h1>
              </div>
            </Link>
          </div>
        </>
      ) : (
        history.push("/login")
      )}
    </C.Container>
  );
};
export default CardProfile;
