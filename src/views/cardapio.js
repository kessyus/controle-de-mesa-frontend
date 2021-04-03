import React, { useCallback, useEffect, useState } from 'react';
import { UncontrolledCarousel, Table } from 'reactstrap';
import { getServiceAllCardapio } from '../services/mesas.service';
import styled from 'styled-components';
import imgBatata from '../assets/img/batata3.png';
import imgFilet from '../assets/img/filet3.png';
import imgPrimavera from '../assets/img/primavera3.png';

const items = [
  {
    src: imgFilet,
    caption:
      '375g do corte nobre do contra-filet, perfeitamente temperado e preparado na chapa.',
    header: 'Strip Steak',
    key: '1',
  },
  {
    src: imgBatata,
    caption:
      'Nossas fritas com uma cobertura irresistível com mix de queijos e bacon.',
    header: 'Batatas Fritas com Queijo',
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
  const [cardapio, setCardapio] = useState({});
  const [update, setUpdate] = useState(false);

  const getCardapio = useCallback(async () => {
    try {
      const res = await getServiceAllCardapio();
      setCardapio(res.data);
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    getCardapio();
    setUpdate(false);
  }, [getCardapio, update]);

  return (
    <>
      <Carrossel items={items} />
      <Bloco>
        <Titulo>Cardápio</Titulo>
        <Table responsive striped dark size="sm">
          <thead>
            <tr>
              <Categoria>Categoria</Categoria>
              <th>Produto</th>
              <th>Descrição</th>
              <th>Preço</th>
            </tr>
          </thead>
          <tbody>
            {cardapio && cardapio.length ? (
              cardapio &&
              cardapio.map((v, i) => (
                <tr key={i}>
                  <Categoria>{v.categoria}</Categoria>
                  <th>{v.produto}</th>
                  <th>{v.descricao}</th>
                  <th>{v.preco}</th>
                </tr>
              ))
            ) : (
              <div>Loading...</div>
            )}
          </tbody>
        </Table>
      </Bloco>
    </>
  );
};

export default CardapioRestaurante;

const Carrossel = styled(UncontrolledCarousel)`
  height: calc(100vh - 100px);

  @media only screen and (max-width: 700px) {
    height: auto;
  }
`;

const Bloco = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  width: 100%;
  padding: 20px;
  align-items: center;
  justify-content: center;

  @media only screen and (max-width: 700px) {
    padding: 5px;
  }
`;

const Titulo = styled.h1`
  margin: 50px;
`;

const Categoria = styled.th`
  @media only screen and (max-width: 700px) {
    display: none;
  }
`;
