import { Link } from "react-router-dom";
import { NavBarConteiner } from "./style";
import Logo from "../../assets/img/Logo.png";
import Button from "../Button";
import { FiLogOut } from "react-icons/fi";
import userEvent from "@testing-library/user-event";

import { useUser } from "../../providers/User";
import { useAuth } from "../../providers/Auth";
const Header = ({ destiny, name, logout = false }) => {
  const { user, setUser } = useUser();
  const { logoutF } = useAuth();
  return (
    <NavBarConteiner>
      <div className="header-conteudo">
        <div className="logo-name">
          <Link className="link-navBar" to="/">
            <div className="logo">
              <img className="img-logo" src={`${Logo}`} alt="Imagem Logo" />
            </div>
          </Link>
          {logout ? (
            <div className="header-mobile">
              <h3>Olá, {user.username}</h3>
            </div>
          ) : (
            ""
          )}
        </div>
        {!logout ? (
          <nav className="navBar">
            <Link className="link-navBar" to="signup">
              {" "}
              <Button className="button" children={"Cadastrar"}></Button>
            </Link>
            <Link className="link-navBar" to="/login">
              <Button
                className="button"
                schema={false}
                children={"Login"}
              ></Button>
            </Link>
          </nav>
        ) : (
          <Link onClick={() => logoutF()} className="link-navBar-logout" to="/">
            <FiLogOut />
            <p>Sair</p>
          </Link>
        )}
      </div>
    </NavBarConteiner>
  );
};
export default Header;
