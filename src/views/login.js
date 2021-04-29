import React, { useState, useEffect } from 'react';
import {
  Alert,
  Button,
  Form,
  FormGroup,
  Col,
  Label,
  Input,
  Spinner,
} from 'reactstrap';
import styled from 'styled-components';
import { signInAction } from '../store/auth/auth.action';
import { useDispatch, useSelector } from 'react-redux';

const Login = () => {
  const [hasError, setHasError] = useState(false);
  const onDismiss = () => setHasError(false);

  const dispatch = useDispatch();
  const error = useSelector((state) => state.auth.error);
  const loading = useSelector((state) => state.auth.loading);

  const [form, setForm] = useState({});
  const handleChange = (props) => {
    const { value, name } = props.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const submitForm = (e) => {
    e.preventDefault();
    dispatch(signInAction(form));
  };

  useEffect(() => {
    setHasError(error.length > 0);
  }, [error]);

  return (
    <Area>
      <Alert color="danger" isOpen={hasError} toggle={onDismiss}>
        Usuário ou senha incorreto!
      </Alert>
      <div>
        <LoginForm>
          <FormGroup row>
            <h5>Atenção! Área restrita do restaurante.</h5>
          </FormGroup>
          <FormGroup row>
            <Label for="usuario" sm="2">
              Usuário
            </Label>
            <Col sm="12">
              <Input
                type="text"
                name="usuario"
                disabled={loading}
                onChange={handleChange}
                value={form.usuario || ''}
                placeholder="Informe o usuário"
              />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="senha" sm={2}>
              Senha
            </Label>
            <Col sm={12}>
              <Input
                type="password"
                name="senha"
                disabled={loading}
                onChange={handleChange}
                value={form.senha || ''}
                placeholder="Informe a senha"
              />
            </Col>
          </FormGroup>
        </LoginForm>
        <br />
        <center>
          <Button color="danger" onClick={submitForm}>
            {loading ? (
              <>
                <Spinner size="sm" color="light" /> Carregando...
              </>
            ) : (
              'Login'
            )}
          </Button>
        </center>
      </div>
    </Area>
  );
};

export default Login;

const LoginForm = styled(Form)`
  width: 100%;
`;

const Area = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
