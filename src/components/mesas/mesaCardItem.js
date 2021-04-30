import React from 'react';
import { Link } from 'react-router-dom';
import { CardTitle, CardSubtitle, CardBody, Button } from 'reactstrap';
import styled from 'styled-components';

const MesaCardItem = ({ data }) => {
  return (
    <SCardBody>
      <CardTitle tag="h5">{`Mesa ${data.numero}`}</CardTitle>
      <SCardSubtitle tag="h6" className="mb-2 text-muted">
        {data.ambiente}
      </SCardSubtitle>
      <SButton size="sm" tag={Link} to={`/mesa/${data.id}`}>
        Pedido
      </SButton>
    </SCardBody>
  );
};

export default MesaCardItem;

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
