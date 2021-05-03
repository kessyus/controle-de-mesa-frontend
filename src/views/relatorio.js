import React, { useCallback, useEffect, useState } from 'react';
import { Table } from 'reactstrap';
import styled from 'styled-components';
import { listTopRequests } from '../services/relatorio.service';

const Relatorio = () => {
  const [pedidos, setPedidos] = useState({});
  const [update, setUpdate] = useState(false);

  const getPedidos = useCallback(async () => {
    try {
      const res = await listTopRequests();
      setPedidos(res.data);
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    getPedidos();
    setUpdate(false);
  }, [getPedidos, update]);

  return (
    <Bloco>
      <Titulo>Relatório - Itens mais pedidos</Titulo>
      <Table responsive striped dark size="sm">
        <thead>
          <tr>
            <th>Produto</th>
            <th>Preço</th>
            <th>Quantidade</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {pedidos && pedidos.length ? (
            pedidos &&
            pedidos.map((v, i) => (
              <tr key={i}>
                <td>{v.produto}</td>
                <td>{v.preco}</td>
                <td>{v.pedidos}</td>
                <td>
                  {parseFloat(v.preco).toFixed(2) *
                    parseFloat(v.pedidos).toFixed(2)}
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4">Loading...</td>
            </tr>
          )}
        </tbody>
      </Table>
    </Bloco>
  );
};

export default Relatorio;

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
