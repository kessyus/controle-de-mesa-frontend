import React, { useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router';

import {
  getServiceAllDetalhes,
  getServiceAllCardapio,
} from '../services/mesas.service';
import Produtos from '../components/cardapio/cardapio';
import Pedido from '../components/pedido/index';
import Loading from '../components/loading';
import { Button, Navbar } from 'reactstrap';
import { GiKnifeFork } from 'react-icons/gi';
import { BsCardChecklist } from 'react-icons/bs';
import styled from 'styled-components';

const Detalhes = (props) => {
  const { id } = useParams();
  const { history } = props;
  const [loading, setLoading] = useState(false);
  const [detalhes, setDetalhes] = useState({});
  const [cardapio, setCardapio] = useState({});
  const [update, setUpdate] = useState(false);
  const [isPed, setPed] = useState(false);

  const getDetalhes = useCallback(async () => {
    try {
      setLoading(true);
      const res = await getServiceAllDetalhes(id);
      setDetalhes(res.data);
      setLoading(false);
    } catch (error) {
      console.log(error);
      history.push('/');
    }
  }, [id, history]);

  const getCardapio = useCallback(async () => {
    try {
      const res = await getServiceAllCardapio();
      setCardapio(res.data);
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    getDetalhes();
    getCardapio();
    setUpdate(false);
  }, [getDetalhes, getCardapio, update]);

  const showDetalhes = (detalhes) => (
    <SJumbotron>
      <div className="lead">
        <strong>Mesa {`${detalhes.numero}`} </strong>
      </div>
      <p>{`${detalhes.ambiente}`}</p>
    </SJumbotron>
  );

  const Menu = () => (
    <SNavbar expand="md mb-4">
      <div className="info">{isPed ? 'Consumo Detalhado' : 'Fazer Pedido'}</div>
      <div>
        <Button onClick={() => setPed(!isPed)} size="sm" color="danger">
          {isPed ? (
            <>
              <SGiKnifeFork /> Incluir Produto
            </>
          ) : (
            <>
              <SBsCardChecklist /> Consumo Detalhado
            </>
          )}
        </Button>
      </div>
    </SNavbar>
  );

  const mudarTela = (detalhes) => (
    <BodyComponent>
      {showDetalhes(detalhes)}
      {Menu()}
      {isPed ? (
        <Pedido lista={detalhes.mesaCardapios} update={setUpdate} />
      ) : (
        <Produtos cardapio={cardapio} idmesa={id} update={setUpdate} />
      )}
    </BodyComponent>
  );

  return loading ? <Loading /> : mudarTela(detalhes);
};

export default Detalhes;

const BodyComponent = styled.div`
  padding: 30px;
`;

const SJumbotron = styled.div`
  height: 10vh;
  display: flex;
  flex-direction: column;
  padding: 10px;
  background-color: rgb(18, 18, 18) !important;
  border-radius: 5px;
  color: white;
`;

const SNavbar = styled(Navbar)`
  background-color: none !important;
  margin: 10px 0 20px;
  padding: 10px 0;
  border-bottom: thin dotted rgb(186, 169, 160);
  display: flex;

  .info {
    flex: 1;
    font-weight: bold;
  }
`;

const SGiKnifeFork = styled(GiKnifeFork)`
  margin: 3px;
  margin-top: -1px;
`;

const SBsCardChecklist = styled(BsCardChecklist)`
  margin: 3px;
  margin-top: -1px;
`;
