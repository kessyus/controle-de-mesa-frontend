import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardTitle, CardSubtitle, CardBody, Button } from 'reactstrap';
import styled from 'styled-components';

const CardItem = ({ item: { numero, ambiente, id } }) => {
  return (
    <SCard>
      <SCardBody>
        <CardTitle tag="h5">{`Mesa ${numero}`}</CardTitle>
        <SCardSubtitle tag="h6" className="mb-2 text-muted">
          {ambiente}
        </SCardSubtitle>
        <SButton size="sm" tag={Link} to={`/mesa/${id}`}>
          Pedido
        </SButton>
      </SCardBody>
    </SCard>
  );
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

const SCardBody = styled(CardBody)`
  display: flex;
  flex-direction: column;
  color: rgb(186, 169, 160);
`;

const SCardSubtitle = styled(CardSubtitle)`
  font-size: 12px;
  /* color: #53354a !important; */
  color: rgb(186, 169, 160) !important;
`;

const SButton = styled(Button)`
  background-color: black;

  :hover {
    background-color: #e84545;
  }
`;
