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
import ReactSwal from '../../plugins/swal';
import styled from 'styled-components';
import { BiTrash, BiEdit } from 'react-icons/bi';
import {
  getServiceAllMesas,
  createMesa,
  deleteMesaById,
  changeMesaById,
} from '../../services/mesas.service';

const Mesa = () => {
  const [modal, setModal] = useState(false);
  const [mesa, setMesa] = useState({});
  const [update, setUpdate] = useState(false);
  const [isChange, setChange] = useState(false);
  const [form, setForm] = useState({});

  const toggle = () => setModal(!modal);

  const getMesas = useCallback(async () => {
    try {
      const res = await getServiceAllMesas();
      setMesa(res.data);
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    getMesas();
    setUpdate(false);
  }, [getMesas, update]);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const includeMesa = () => {
    setChange(false);
    setForm({});
    toggle();
  };

  const editMesa = ({ id, numero, qtd_cadeiras, ambiente }) => {
    setChange(true);
    setForm({ ...form, id, numero, qtd_cadeiras, ambiente });
    toggle();
  };

  const deleteMesa = (id, numero) => {
    ReactSwal.fire({
      title: `Deseja excluir a mesa ${numero}?`,
      showDenyButton: false,
      showCancelButton: true,
      confirmButtonText: `Sim`,
      confirmButtonColor: '#C82332',
      cancelButtonText: `Não`,
    }).then((result) => {
      if (result.isConfirmed) {
        deleteMesaById(id)
          .then(() => {
            ReactSwal.fire({
              icon: 'success',
              title: `Mesa excluída com sucesso!`,
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
      numero: form.numero,
      qtd_cadeiras: form.qtd_cadeiras,
      ambiente: form.ambiente,
    };
    isChange
      ? changeMesaById(form.id, data)
          .then(() => {
            ReactSwal.fire({
              icon: 'success',
              title: `Mesa alterada com sucesso!`,
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
      : createMesa(data)
          .then(() => {
            ReactSwal.fire({
              icon: 'success',
              title: `Mesa incluída com sucesso!`,
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
        <h3>Mesas do restaurante:</h3>
        <Button onClick={includeMesa} size="sm" color="danger">
          Cadastrar
        </Button>
      </Title>

      <Table responsive striped dark size="sm">
        <thead>
          <tr>
            <th>Número</th>
            <th>Qtd. Cadeiras</th>
            <th>Ambiente</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {mesa && mesa.length ? (
            mesa &&
            mesa.map((v, i) => (
              <tr key={i}>
                <td>{v.numero}</td>
                <td>{v.qtd_cadeiras}</td>
                <td>{v.ambiente}</td>
                <td>
                  <BiEdit
                    style={{ cursor: 'pointer' }}
                    className="text-info mr-1 font-weight-normal"
                    onClick={() => editMesa(v)}
                  />{' '}
                  <BiTrash
                    style={{ cursor: 'pointer' }}
                    className="text-danger font-weight-normal"
                    onClick={() => deleteMesa(v.id, v.numero)}
                  />
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

      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader className="bg-dark" toggle={toggle}>
          {isChange ? 'Atualizar' : 'Cadastrar'} mesa
        </ModalHeader>
        <ModalBody>
          <Row>
            <Col xs="12" sm="12" md="12" lg="12">
              <FormGroup>
                <Caption for="name">Número</Caption>
                {isChange ? (
                  <Input
                    type="number"
                    value={form.numero || ''}
                    onChange={handleChange}
                    name="numero"
                    placeholder="Número da mesa"
                    disabled
                  />
                ) : (
                  <Input
                    type="number"
                    value={form.numero || ''}
                    onChange={handleChange}
                    name="numero"
                    placeholder="Número da mesa"
                  />
                )}
              </FormGroup>
              <FormGroup>
                <Caption for="name">Quantidade de Cadeiras</Caption>
                <Input
                  type="number"
                  value={form.qtd_cadeiras || ''}
                  onChange={handleChange}
                  name="qtd_cadeiras"
                  placeholder="Número de cadeiras"
                />
              </FormGroup>
              <FormGroup>
                <Caption for="name">Ambiente</Caption>
                <Input
                  type="text"
                  value={form.ambiente || ''}
                  onChange={handleChange}
                  name="ambiente"
                  placeholder="Lugar da mesa"
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

export default Mesa;

const Title = styled.div`
  padding: 30px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const Caption = styled(Label)`
  color: black !important;
`;

const Main = styled.div`
  padding: 10px;
`;
