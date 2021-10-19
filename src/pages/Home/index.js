import Header from "../../components/NavBar";
import { Container, ContainerFooter, ContainerMiddle } from "./styles";
import imgColab from '../../assets/img/colaboladores.png'
import imgRoberta from '../../assets/img/Roberta.jpeg';
import imgRafael from '../../assets/img/Rafael.jpeg';
import imgGustavo from '../../assets/img/Gustavo.jpeg'
import imgFlavio from '../../assets/img/Flavio.jpeg'
import Button from '../../components/Button'
import imgDuvida from '../../assets/img/duvida.png'


const Home = () => {

  return (
    <>


      <Container>
        <div>
          <figcaption>
            <img src={`${imgColab}`} alt="" />
          </figcaption>
        </div>

        <div>
          <p>
            <h1>Bons hábitos mudam pessoas</h1>
            Procure hábitos saudáveis, aprenda novos
            hábitos e pratique esportes. Com amigos é ainda melhor. Experimete!
          </p>
          <Button schema={false} children={'Começar'} />
        </div>

      </Container>

      <ContainerMiddle>

        <div>
          <p>
            <h1>Bons hábitos mudam pessoas</h1>
            Procure hábitos saudáveis, aprenda novos
            hábitos e pratique esportes. Com amigos é ainda melhor. Experimete!
          </p>
         
        </div>
        <div>
          <figcaption>
            <img src={`${imgDuvida}`} alt="" />
          </figcaption>
        </div>


      </ContainerMiddle>
      <ContainerFooter>
        <div>
          <div>
            <figcaption>
              <img src={`${imgRoberta}`} alt="" />
            </figcaption>
          </div>
          <div>
            <p>
              <p>
                <h1>Bons hábitos mudam pessoas</h1>
                Procure hábitos saudáveis, aprenda novos
                hábitos e pratique esportes. Com amigos é ainda melhor. Experimete!
              </p>
            </p>
          </div>

          <div>
            <figcaption>
              <img src={`${imgRafael}`} alt="" />
            </figcaption>
          </div>
          
        </div>

        <div>
            <div>
              <figcaption>
                <img src={`${imgGustavo}`} alt="" />
              </figcaption>
            </div>

            <div>
              <figcaption>
                <img src={`${imgFlavio}`} alt="" />
              </figcaption>
            </div>

        </div>

      </ContainerFooter>
    </>
  )
};

export default Home;
