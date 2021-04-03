import React, { useState } from 'react';
import { NavLink as RRDNavLink } from 'react-router-dom';
import {
  Collapse,
  Container,
  Nav,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  NavItem,
  NavLink,
} from 'reactstrap';
import styled from 'styled-components';
import myLogo from '../../assets/img/texto_final.svg';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <header>
      <SNavbar color="light" dark expand="md">
        <SContainer>
          <NavbarBrand tag={RRDNavLink} to="/" id="logoMain">
            <IconLogo />
          </NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <SCollapse isOpen={isOpen} navbar>
            <Nav className="mr-auto" navbar>
              <NavItem>
                <SNavLink
                  exact
                  tag={RRDNavLink}
                  activeClassName="active"
                  to="/"
                >
                  Home
                </SNavLink>
              </NavItem>
              <NavItem>
                <SNavLink
                  exact
                  tag={RRDNavLink}
                  activeClassName="active"
                  to="/mesa"
                >
                  Atendimento
                </SNavLink>
              </NavItem>
              <NavItem>
                <SNavLink
                  exact
                  tag={RRDNavLink}
                  activeClassName="active"
                  to="/cardapio"
                >
                  Cardápio
                </SNavLink>
              </NavItem>
              <NavItem>
                <SNavLink
                  exact
                  tag={RRDNavLink}
                  activeClassName="active"
                  to="/login"
                >
                  Login
                </SNavLink>
              </NavItem>
            </Nav>
          </SCollapse>
        </SContainer>
      </SNavbar>
    </header>
  );
};

export default Header;

const SNavbar = styled(Navbar)`
  /* box-shadow: 0px 4px 8px #777; */
  background-color: rgb(23, 23, 23) !important;
  a {
    color: rgb(186, 169, 160) !important;
    text-decoration: none;
  }
`;

const SContainer = styled(Container)`
  display: flex;
  flex-direction: row;
  align-content: flex-start;
`;

const SNavLink = styled(NavLink)`
  margin: auto 5px;
  font-size: 18px;

  &.active {
    border-bottom: solid 2px rgb(186, 169, 160);
    color: white !important;
  }
`;

const SCollapse = styled(Collapse)`
  flex-grow: 0;
`;

const IconLogo = styled.div`
  background: url(${myLogo}) no-repeat;
  background-size: 100%;
  width: 200px;
  height: 64px;
`;
