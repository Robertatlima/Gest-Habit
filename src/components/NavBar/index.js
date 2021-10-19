import { Link } from "react-router-dom";
import { NavBarConteiner } from "./style";
import Logo from "../../assets/img/Logo.png";
import Button from "../Button";

const Header = ({ destiny, name, logout = false }) => {
  return (
    <NavBarConteiner>
      <div className="header-conteudo">
        <div className="logo">
          <img className="img-logo" src={`${Logo}`} alt="Imagem Logo" />
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
          <Link className="link-navBar" to="/">
            <Button
              className="button"
              schema={false}
              children={"Sair"}
            ></Button>
          </Link>
        )}
      </div>
    </NavBarConteiner>
  );
};
export default Header;
