import React from 'react';
import { UncontrolledCarousel } from 'reactstrap';
import styled from 'styled-components';
import imgBatata from '../assets/img/batata3.png';
import imgFilet from '../assets/img/filet3.png';
import imgPrimavera from '../assets/img/primavera3.png';

const items = [
  {
    src: imgBatata,
    caption:
      'Nossas fritas com uma cobertura irresistível com mix de queijos e bacon.',
    header: 'Batatas Fritas com Queijo',
    key: '1',
  },
  {
    src: imgFilet,
    caption:
      '375g do corte nobre do contra-filet, perfeitamente temperado e preparado na chapa.',
    header: 'Strip Steak',
    key: '2',
  },
  {
    src: imgPrimavera,
    caption:
      'Fettuccine tradicional com legumes e tiras de frango grelhado, refogado com um cremoso molho Alfredo e coberto com queijo parmesão (Grana Padano).',
    header: 'Fettuccine Primavera',
    key: '3',
  },
];

const CardapioRestaurante = () => {
  return (
    <>
      <Carrossel items={items} />
      <div>
        <h3>Cardapio 123</h3>
        <h5>Fetuccine</h5>
        <h5>Fetuccine</h5>
        <h5>Fetuccine</h5>
        <h5>Fetuccine</h5>
        <h5>Fetuccine</h5>
        <h5>Fetuccine</h5>
        <h5>Fetuccine</h5>
        <h5>Fetuccine</h5>
        <h5>Fetuccine</h5>
        <h5>Fetuccine</h5>
        <h5>Fetuccine</h5>
        <h5>Fetuccine</h5>
      </div>
    </>
  );
};

export default CardapioRestaurante;

const Carrossel = styled(UncontrolledCarousel)``;
