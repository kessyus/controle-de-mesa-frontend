import React, { useState } from 'react';
import { Button, Form, FormGroup, Input, Col, Alert } from 'reactstrap';
import { createServicePedido } from '../../services/mesas.service';
import ReactSwal from '../../plugins/swal';
import styled from 'styled-components';

const Produtos = ({ cardapio, idmesa, update }) => {
  const [produtos, setProdutos] = useState({});
  const [hasError, setHasError] = useState(false);
  const onDismiss = () => setHasError(false);

  const handleChange = (e) => {
    setProdutos({
      ...produtos,
      [e.target.name]: e.target.value,
    });
  };

  const fazerPedido = () => {
    createServicePedido(idmesa, produtos)
      .then(() => {
        ReactSwal.fire({
          icon: 'success',
          title: `Produto incluído com sucesso!`,
          showConfirmButton: false,
          showCloseButton: false,
          timer: 2500,
        });
        setProdutos({});
        update(true);
      })
      .catch((error) => {
        console.log(error);
        setHasError(true);
      });
  };

  return (
    <>
      <Alerta color="danger" isOpen={hasError} toggle={onDismiss}>
        Você não tem permissão para esta ação!
      </Alerta>
      <Form>
        <Col xs="12" sm="12" md="8" lg="8">
          <p>Incluir Produto:</p>
          {cardapio && cardapio.length ? (
            <FormGroup>
              <Input
                type="select"
                name="idcardapio"
                value={produtos.idcardapio || ' '}
                onChange={handleChange}
              >
                <option>Produtos...</option>
                <option data-divider="true">-----------</option>
                {cardapio &&
                  cardapio.map((v, i) => (
                    <option key={i} value={v.id}>
                      {' '}
                      {v.categoria} - {v.produto}{' '}
                    </option>
                  ))}
              </Input>
              <br />
              <Button onClick={fazerPedido} color="danger">
                Incluir Pedido
              </Button>
            </FormGroup>
          ) : (
            <div>Abrindo o cardápio...</div>
          )}
        </Col>
      </Form>
    </>
  );
};
export default Produtos;

const Alerta = styled(Alert)`
  width: 400px;
`;
