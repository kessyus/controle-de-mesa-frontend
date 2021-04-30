import { getServiceAllMesas } from '../services/mesas.service';
import React, { useState, useEffect, useCallback } from 'react';
import { Row } from 'reactstrap';
import CardItem from '../components/mesas/mesaCard';
import Loading from '../components/loading';
import styled from 'styled-components';

const Mesas = () => {
  const [mesas, setMesa] = useState([]);
  const [loading, setLoading] = useState(false);
  const [hasError, setError] = useState(false);

  const getMesas = useCallback(async () => {
    setLoading(true);
    getServiceAllMesas()
      .then((res) => {
        setMesa(res.data);
        setLoading(false);
      })
      .catch((err) => {
        setError(true);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    getMesas();
  }, [getMesas]);

  const mapDeMesas = (mesas) =>
    mesas.map((item, i) => (
      <Blocos key={i}>
        <CardItem item={item} />
      </Blocos>
    ));
  return (
    <div className="mesas">
      {hasError ? (
        <div>Aconteceu um erro, volte já!</div>
      ) : (
        <Row>{loading ? <Loading /> : mapDeMesas(mesas)}</Row>
      )}
    </div>
  );
};

export default Mesas;

const Blocos = styled.div`
  display: flex;
  flex: 1;
  flex-flow: row wrap;
  justify-content: space-evenly;
  align-items: center;
`;
