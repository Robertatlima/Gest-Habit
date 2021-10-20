import {
  Container,
  ContainerTop,
  ContainerFooter,
  ContainerMiddle,
} from "./styles";
import imgColab from "../../assets/img/colaboladores.png";
import imgRoberta from "../../assets/img/Roberta.jpeg";
import imgRafael from "../../assets/img/Rafael.jpeg";
import imgGustavo from "../../assets/img/Gustavo.jpeg";
import imgFlavio from "../../assets/img/Flavio.jpeg";
import Button from "../../components/Button";
import imgDuvida from "../../assets/img/duvida.png";
import { useHistory } from "react-router-dom";
import { FaLinkedinIn } from "react-icons/fa";

const Home = () => {
  const history = useHistory();
  const handleComecar = () => {
    history.push("/signup");
  };

  return (
    <Container>
      <ContainerTop>
        <main>
          <div>
            <img src={`${imgColab}`} alt="" />
          </div>
          <aside>
            <h1>Todos seus hábitos.</h1>
            <h1>Um lugar.</h1>
            <p>
              Procure hábitos saudáveis, aprenda novos hábitos e pratique
              esportes. Com amigos é ainda melhor. Experimete!
            </p>
            <Button
              className="startbutton"
              schema={false}
              children={"Começar"}
              onClick={handleComecar}
            />
          </aside>
        </main>
      </ContainerTop>

      <ContainerMiddle>
        <main>
          <aside>
            <h1>Todos seus hábitos.</h1>
            <h1>Um lugar.</h1>
            <p>
              Procure hábitos saudáveis, aprenda novos hábitos e pratique
              esportes. Com amigos é ainda melhor. Experimete!
            </p>
          </aside>
          <div>
            <img src={`${imgDuvida}`} alt="" />
          </div>
        </main>
      </ContainerMiddle>
      <ContainerFooter>
        <main>
          <div className="nome">
            <img src={`${imgRoberta}`} alt="Roberta" />

            <h3>Roberta Lima</h3>
            <a
              href="https://www.linkedin.com/in/robertatlima/"
              target="_blank"
              rel="noreferrer noopener"
            >
              <FaLinkedinIn />
            </a>
          </div>
          <aside>
            <div>
              <div className="centerContainer">
                <h1>Criadores do gest Habit</h1>
                <p>
                  Disponibilizado para sua apreciação pelos seguintes membros do
                  grupo
                </p>
              </div>
              <div className="centerBottomContainer">
                <div className="nome">
                  <img src={`${imgFlavio}`} alt="Flávio" />

                  <h3>Flávio Santos</h3>

                  <a
                    href="https://www.linkedin.com/in/flaviopsantos/"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    <FaLinkedinIn />
                  </a>
                </div>
                <div className="nome">
                  <img src={`${imgRafael}`} alt="Rafael" />

                  <h3>Rafael Kammer</h3>

                  <a
                    href="https://www.linkedin.com/in/rafael-kammer/"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    <FaLinkedinIn />
                  </a>
                </div>
              </div>
            </div>
          </aside>
          <div className="nome">
            <img src={`${imgGustavo}`} alt="Gustavo" />

            <h3>Gustavo Lira </h3>

            <a
              href="https://www.linkedin.com/in/gustavo-lira-ribeiro-gomes/"
              target="_blank"
              rel="noreferrer noopener"
            >
              <FaLinkedinIn />
            </a>
          </div>
        </main>
      </ContainerFooter>
    </Container>
  );
};

export default Home;
