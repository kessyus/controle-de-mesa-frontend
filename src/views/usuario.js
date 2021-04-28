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
import styled from 'styled-components';
import { BiTrash, BiEdit } from 'react-icons/bi';
import {
  listUsers,
  createUsers,
  changeUsersById,
  deleteUsersById,
} from '../services/usuario.service';

const Usuario = () => {
  const [modal, setModal] = useState(false);
  const [users, setUsers] = useState({});
  const [update, setUpdate] = useState(false);
  const [isChange, setChange] = useState(false);
  const [form, setForm] = useState({});

  const toggle = () => setModal(!modal);

  const getUsers = useCallback(async () => {
    try {
      const res = await listUsers();
      setUsers(res.data);
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    getUsers();
    setUpdate(false);
  }, [getUsers, update]);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const includeUser = () => {
    setChange(false);
    setForm({});
    toggle();
  };

  const editUser = ({ id, nome, tipo }) => {
    setChange(true);
    setForm({ ...form, id, nome, tipo });
    toggle();
  };

  const deleteUser = (id, nome) => {
    ReactSwal.fire({
      title: `Deseja excluir o usuário ${nome}?`,
      showDenyButton: false,
      showCancelButton: true,
      confirmButtonText: `Sim`,
      confirmButtonColor: '#C82332',
      cancelButtonText: `Não`,
    }).then((result) => {
      if (result.isConfirmed) {
        deleteUsersById(id)
          .then(() => {
            ReactSwal.fire({
              icon: 'success',
              title: `Usuário excluído com sucesso!`,
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
      nome: form.nome,
      tipo: form.tipo,
      senha: form.senha,
    };
    const dataChange = {
      nome: form.nome,
      tipo: form.tipo,
    };
    isChange
      ? changeUsersById(form.id, dataChange)
          .then(() => {
            ReactSwal.fire({
              icon: 'success',
              title: `Usuário alterado com sucesso!`,
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
      : createUsers(data)
          .then(() => {
            ReactSwal.fire({
              icon: 'success',
              title: `Usuário incluído com sucesso!`,
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
        <h3>Usuários cadastrados:</h3>
        <Button onClick={includeUser} size="sm" color="danger">
          Cadastrar
        </Button>
      </Title>

      <Table responsive striped dark size="sm">
        <thead>
          <tr>
            <th>Username</th>
            <th>Função</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {users && users.length ? (
            users &&
            users.map((v, i) => (
              <tr key={i}>
                <td>{v.nome}</td>
                <td>{v.tipo === '1' ? 'Administrador' : 'Funcionário'}</td>
                <td>
                  <BiEdit
                    style={{ cursor: 'pointer' }}
                    className="text-info mr-1 font-weight-normal"
                    onClick={() => editUser(v)}
                  />{' '}
                  <BiTrash
                    style={{ cursor: 'pointer' }}
                    className="text-danger font-weight-normal"
                    onClick={() => deleteUser(v.id, v.nome)}
                  />
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="3">Loading...</td>
            </tr>
          )}
        </tbody>
      </Table>

      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader className="bg-dark" toggle={toggle}>
          {isChange ? 'Atualizar' : 'Cadastrar'} usuário
        </ModalHeader>
        <ModalBody>
          <Row>
            <Col xs="12" sm="12" md="12" lg="12">
              <FormGroup>
                <Caption for="name">Usuário</Caption>
                {isChange ? (
                  <Input
                    type="text"
                    value={form.nome || ''}
                    onChange={handleChange}
                    name="nome"
                    placeholder="Insira o usuário"
                    disabled
                  />
                ) : (
                  <Input
                    type="text"
                    value={form.nome || ''}
                    onChange={handleChange}
                    name="nome"
                    placeholder="Insira o usuário"
                  />
                )}
              </FormGroup>
              <FormGroup>
                <Caption for="name">Senha</Caption>
                {isChange ? (
                  <Input
                    type="password"
                    value={form.senha || ''}
                    onChange={handleChange}
                    name="senha"
                    placeholder="Insira a senha"
                    disabled
                  />
                ) : (
                  <Input
                    type="password"
                    value={form.senha || ''}
                    onChange={handleChange}
                    name="senha"
                    placeholder="Insira a senha"
                  />
                )}
              </FormGroup>
              <FormGroup>
                <Caption for="name">Função</Caption>
                <Input
                  type="select"
                  value={form.tipo || ' '}
                  onChange={handleChange}
                  name="tipo"
                >
                  <option>Selecione a função</option>
                  <option data-divider="true">-----------</option>
                  <option value="1">Administrador</option>
                  <option value="2">Funcionário</option>
                </Input>
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

export default Usuario;

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
