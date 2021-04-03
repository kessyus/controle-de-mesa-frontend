import styled from 'styled-components';
import bgImage from '../assets/img/steaks3.png';

const Home = () => {
  return (
    <ImagemFundo>
      <Texto>
        Venha provar essa experiência gastronômica no coração da cidade
        maravilhosa.
      </Texto>
      <Espaco></Espaco>
    </ImagemFundo>
  );
};

export default Home;

const ImagemFundo = styled.div`
  background: url(${bgImage}) no-repeat;
  background-size: inherit;
  background-position: right;
  width: 100%;
  height: 100%;
  display: flex;
  flex: 1;
  justify-content: space-evenly;
`;

const Texto = styled.div`
  width: 50%;
  padding-top: 50px;
  padding-left: 50px;
  font-size: 60px;

  @media only screen and (max-width: 600px) {
    font-size: 30px;
    width: 80%;
  }
`;

const Espaco = styled.div`
  width: 50%;

  @media only screen and (max-width: 600px) {
    width: 20%;
  }
`;
