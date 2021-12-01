import React from 'react';
import { Carousel } from 'react-bootstrap';
import logo1 from '../../assets/images/pet-carousel-1.jpg';
import logo2 from '../../assets/images/pet-carousel-2.jpg';
import '../CarouselTickets/styles.css';
import { useHistory } from 'react-router';
import { TextCarousel, TitleCarousel } from './styles';

const CarouselTickets = () => {
  const history = useHistory();
  const redirectToBuy = (idShowCase: number) => {
    history.push(`/showcase/${idShowCase}`);
  };

  return (
    <div
      style={{
        display: 'block',
        width: 750,
        padding: 50,
        margin: 'auto',
      }}
    >
      <TitleCarousel>Dica Animal 😺</TitleCarousel>
      <Carousel nextLabel="Próximo" prevLabel="Anterior">
        <Carousel.Item interval={3500}>
          <img
            className="d-block w-100"
            src={logo2}
            onClick={() => redirectToBuy(5)}
            alt="metallica"
          />
          <Carousel.Caption>
            <TextCarousel>
              <h3>Proteção 😷</h3>
              <ol>
                <li>Invista em uma boa coleira e peitoral</li>
                <li>Coloque uma plaquinha de identificação</li>
                <li>Garanta telas de proteção e portões sem rotas de fuga</li>
                <li>
                  Sempre use o cinto de segurança em passeios e viagens de carro
                </li>
                <li>Mantenha ambientes seguros dentro de casa</li>
              </ol>
            </TextCarousel>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={3500}>
          <img className="d-block w-100" src={logo1} alt="pearl" />
          <Carousel.Caption>
            <TextCarousel>
              <h3>Alimentação 🍽</h3>
              <ol>
                <li>Opte por ração industrial</li>
                <li>Garanta uma alimentação rica em proteína animal</li>
                <li>
                  Defina uma dieta de acordo com a condição do cão ou gato
                </li>
                <li>Estimule o apetite sobretudo pelo cheiro</li>
                <li>Disponibilize água</li>
              </ol>
            </TextCarousel>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default CarouselTickets;
