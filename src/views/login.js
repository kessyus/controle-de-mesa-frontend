import React, { useState } from 'react';
import { Alert, Button, Form, FormGroup, Col, Label, Input } from 'reactstrap';
import styled from 'styled-components';

const Login = () => {
  const [alertVisible, setAlertVisible] = useState(true);
  const onDismiss = () => setAlertVisible(false);

  return (
    <Area>
      <Alert color="danger" isOpen={alertVisible} toggle={onDismiss}>
        This is a primary alert — check it out!
      </Alert>
      <div>
        <LoginForm>
          <FormGroup row>
            <Label for="nome" sm={2}>
              Username
            </Label>
            <Col sm={10}>
              <Input type="text" name="nome" placeholder="Informe o username" />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="senha" sm={2}>
              Senha
            </Label>
            <Col sm={10}>
              <Input
                type="password"
                name="senha"
                placeholder="Informe a senha"
              />
            </Col>
          </FormGroup>
        </LoginForm>
        <center>
          <Button color="danger">Login</Button>
        </center>
      </div>
    </Area>
  );
};

export default Login;

const LoginForm = styled(Form)`
  width: 450px;
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
