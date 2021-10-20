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
            <figcaption>
              <img src={`${imgColab}`} alt="" />
            </figcaption>
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
            <figcaption>
              <img src={`${imgDuvida}`} alt="" />
            </figcaption>
          </div>
        </main>
      </ContainerMiddle>
      <ContainerFooter>
        <main>
          <div>
            <figcaption>
              <img src={`${imgRoberta}`} alt="Roberta" />
            </figcaption>
          </div>
          <aside>
            <div>
              <div className="centerContainer">
                <h1>Projeto</h1>
                <h1>Sprint 4</h1>
                <p>
                  Disponibilizado para sua apreciação pelos seguintes membros do
                  grupo
                </p>
              </div>
              <div className="centerBottomContainer">
                <div>
                  <figcaption>
                    <img src={`${imgFlavio}`} alt="Flávio" />
                  </figcaption>
                </div>
                <div>
                  <figcaption>
                    <img src={`${imgRafael}`} alt="Rafael" />
                  </figcaption>
                </div>
              </div>
            </div>
          </aside>
          <div>
            <figcaption>
              <img src={`${imgGustavo}`} alt="Gustavo" />
            </figcaption>
          </div>
        </main>
      </ContainerFooter>
    </Container>
  );
};

export default Home;
