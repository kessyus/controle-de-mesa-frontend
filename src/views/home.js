import styled from 'styled-components';
import bgImage from '../assets/img/steaks3.png';

const Home = () => {
  return (
    <ImagemFundo>
      <Texto>
        Venha provar essa experiência gastronômica inesquecível no coração da
        cidade maravilhosa.
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

  @media only screen and (max-width: 700px) {
    font-size: 40px;
    width: 80%;
  }
`;

const Espaco = styled.div`
  width: 50%;

  @media only screen and (max-width: 700px) {
    width: 20%;
  }
`;
