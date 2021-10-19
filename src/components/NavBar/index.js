import { Link } from "react-router-dom"
import { NavBarConteiner } from "./style";
import Logo from "../../assets/img/Logo.png"
import Button from "../Button";

const Header = ({ destiny, name }) => {
    return (
        <NavBarConteiner>
            <ul>
               
                    <li>
                      <img src={`${Logo}`} alt="Imagem Logo" />
                    </li>
                    <li>
                    <Button schema={false} children={'Login'}></Button>
                    <Button children={'Cadastro'}></Button>                  
                    </li>
            </ul>
            
        </NavBarConteiner>
    )
}
export default Header;