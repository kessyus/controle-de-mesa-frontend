import React, { useCallback, useEffect, useState } from 'react';
import {
  Button,
  Table,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Row,
  Col,
  FormGroup,
  Label,
  Input,
} from 'reactstrap';
import ReactSwal from '../plugins/swal';
import { getServiceAllCardapio } from '../services/mesas.service';
import styled from 'styled-components';
import { BiTrash, BiEdit } from 'react-icons/bi';
import {
  createItemCardapio,
  changeItemCardapio,
  deleteItemCardapio,
} from '../services/cardapio.service';

const Cadastro = () => {
  const [modal, setModal] = useState(false);
  const [cardapio, setCardapio] = useState({});
  const [update, setUpdate] = useState(false);
  const [isChange, setChange] = useState(false);
  const [form, setForm] = useState({});

  const toggle = () => setModal(!modal);

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

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const includeTable = () => {
    setChange(false);
    setForm({});
    toggle();
  };

  const editTable = ({ id, categoria, produto, descricao, preco }) => {
    setChange(true);
    setForm({ ...form, id, categoria, produto, descricao, preco });
    toggle();
  };

  const deleteTable = (id, produto) => {
    ReactSwal.fire({
      title: `Deseja excluir o item ${produto}?`,
      showDenyButton: false,
      showCancelButton: true,
      confirmButtonText: `Sim`,
      confirmButtonColor: '#C82332',
      cancelButtonText: `Não`,
    }).then((result) => {
      if (result.isConfirmed) {
        deleteItemCardapio(id)
          .then(() => {
            ReactSwal.fire({
              icon: 'success',
              title: `Produto excluído com sucesso!`,
              showConfirmButton: false,
              showCloseButton: false,
              timer: 2500,
            });
            setUpdate(true);
          })
          .catch((error) => {
            console.log(error);
          });
      }
    });
  };

  const submitForm = () => {
    const data = {
      produto: form.produto,
      preco: form.preco,
      descricao: form.descricao,
      categoria: form.categoria,
    };
    isChange
      ? changeItemCardapio(form.id, data)
          .then(() => {
            ReactSwal.fire({
              icon: 'success',
              title: `Produto alterado com sucesso!`,
              showConfirmButton: false,
              showCloseButton: false,
              timer: 2500,
            });
            toggle();
            setUpdate(true);
          })
          .catch((error) => {
            console.log(error);
          })
      : createItemCardapio(data)
          .then(() => {
            ReactSwal.fire({
              icon: 'success',
              title: `Produto incluído com sucesso!`,
              showConfirmButton: false,
              showCloseButton: false,
              timer: 2500,
            });
            toggle();
            setUpdate(true);
          })
          .catch((error) => {
            console.log(error);
          });
  };

  return (
    <Main>
      <Title>
        <h3>Produtos disponíveis:</h3>
        <Button onClick={includeTable} size="sm" color="danger">
          Cadastrar
        </Button>
      </Title>

      <Table responsive striped dark size="sm">
        <thead>
          <tr>
            <Categoria>Categoria</Categoria>
            <th>Produto</th>
            <th>Descrição</th>
            <th>Preço</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {cardapio && cardapio.length ? (
            cardapio &&
            cardapio.map((v, i) => (
              <tr key={i}>
                <Categoria>{v.categoria}</Categoria>
                <td>{v.produto}</td>
                <td>{v.descricao}</td>
                <td>{v.preco}</td>
                <td>
                  <BiEdit
                    style={{ cursor: 'pointer' }}
                    className="text-info mr-1 font-weight-normal"
                    onClick={() => editTable(v)}
                  />{' '}
                  <BiTrash
                    style={{ cursor: 'pointer' }}
                    className="text-danger font-weight-normal"
                    onClick={() => deleteTable(v.id, v.produto)}
                  />
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <th>Loading...</th>
            </tr>
          )}
        </tbody>
      </Table>

      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader className="bg-dark" toggle={toggle}>
          {isChange ? 'Atualizar' : 'Cadastrar'} produto
        </ModalHeader>
        <ModalBody>
          <Row>
            <Col xs="12" sm="12" md="12" lg="12">
              <FormGroup>
                <Caption for="name">Categoria</Caption>
                <Input
                  type="select"
                  value={form.categoria || ' '}
                  onChange={handleChange}
                  name="categoria"
                >
                  <option>Selecione a categoria</option>
                  <option data-divider="true">-----------</option>
                  <option value="Aperitivos">Aperitivos</option>
                  <option value="Steaks">Steaks</option>
                  <option value="Massas">Massas</option>
                  <option value="Acompanhamentos">Acompanhamentos</option>
                  <option value="Sobremesas">Sobremesas</option>
                  <option value="Bebidas">Bebidas</option>
                </Input>
              </FormGroup>
              <FormGroup>
                <Caption for="name">Produto</Caption>
                <Input
                  type="text"
                  value={form.produto || ''}
                  onChange={handleChange}
                  name="produto"
                  placeholder="Insira o produto"
                />
              </FormGroup>
              <FormGroup>
                <Caption for="name">Descrição</Caption>
                <Input
                  type="text"
                  value={form.descricao || ''}
                  onChange={handleChange}
                  name="descricao"
                  placeholder="Insira a descrição"
                />
              </FormGroup>
              <FormGroup>
                <Caption for="name">Preço</Caption>
                <Input
                  type="number"
                  value={form.preco || ''}
                  onChange={handleChange}
                  name="preco"
                />
              </FormGroup>
            </Col>
          </Row>
        </ModalBody>
        <ModalFooter>
          <Button color="danger" onClick={submitForm}>
            {isChange ? 'Atualizar' : 'Cadastrar'}
          </Button>
        </ModalFooter>
      </Modal>
    </Main>
  );
};

export default Cadastro;

const Title = styled.div`
  padding: 30px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const Categoria = styled.td`
  @media only screen and (max-width: 700px) {
    display: none;
  }
`;

const Caption = styled(Label)`
  color: black !important;
`;

const Main = styled.div`
  padding: 10px;
`;
