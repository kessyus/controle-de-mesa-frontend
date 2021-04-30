import React from 'react';
import { Card } from 'reactstrap';
import styled from 'styled-components';
import MesaCardItem from './mesaCardItem';

const CardItem = ({ item: { numero, ambiente, id, ocupada } }) => {
  const dados = {
    numero,
    ambiente,
    id,
  };
  if (ocupada) {
    return (
      <SCard style={{ 'box-shadow': '0px 0px 6px 4px #967E72' }}>
        <MesaCardItem data={dados} />
      </SCard>
    );
  } else {
    return (
      <SCard>
        <MesaCardItem data={dados} />
      </SCard>
    );
  }
};

export default CardItem;

const SCard = styled(Card)`
  height: 120px;
  width: 160px;
  margin: 50px;
  background-color: rgb(18, 18, 18);

  @media only screen and (max-width: 600px) {
    margin: 20px;
  }
`;
