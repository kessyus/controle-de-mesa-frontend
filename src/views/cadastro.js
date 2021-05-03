import React, { useState } from 'react';
import {
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink,
  Row,
  Col,
} from 'reactstrap';
import classnames from 'classnames';
import Produto from '../components/produto';
import Usuario from '../components/usuario';
import Mesa from '../components/cadmesa';

const Cadastro = () => {
  const [activeTab, setActiveTab] = useState('1');

  const toggle = (tab) => {
    if (activeTab !== tab) setActiveTab(tab);
  };

  return (
    <div>
      <Nav tabs className="nav nav-tabs justify-content-center">
        <NavItem>
          <NavLink
            style={{ cursor: 'pointer', color: '#BAA99F', background: 'none' }}
            className={classnames({ active: activeTab === '1' })}
            onClick={() => {
              toggle('1');
            }}
          >
            Produtos
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            style={{ cursor: 'pointer', color: '#BAA99F', background: 'none' }}
            className={classnames({ active: activeTab === '2' })}
            onClick={() => {
              toggle('2');
            }}
          >
            Mesas
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            style={{ cursor: 'pointer', color: '#BAA99F', background: 'none' }}
            className={classnames({ active: activeTab === '3' })}
            onClick={() => {
              toggle('3');
            }}
          >
            Usuários
          </NavLink>
        </NavItem>
      </Nav>
      <TabContent activeTab={activeTab}>
        <TabPane tabId="1">
          <Row>
            <Col sm="12">
              <Produto />
            </Col>
          </Row>
        </TabPane>
        <TabPane tabId="2">
          <Row>
            <Col sm="12">
              <Mesa />
            </Col>
          </Row>
        </TabPane>
        <TabPane tabId="3">
          <Row>
            <Col sm="12">
              <Usuario />
            </Col>
          </Row>
        </TabPane>
      </TabContent>
    </div>
  );
};

export default Cadastro;
