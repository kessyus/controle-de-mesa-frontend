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
  UncontrolledDropdown,
  DropdownItem,
  DropdownToggle,
  DropdownMenu,
} from 'reactstrap';
import styled from 'styled-components';
import myLogo from '../../assets/img/texto_final.svg';
import { useSelector, useDispatch } from 'react-redux';
import { isAuthenticated } from '../../config/auth';
import { logoutAction } from '../../store/auth/auth.action';
import history from '../../config/history';

const Header = () => {
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  const isAdmin = useSelector((state) => state.auth.isAdmin);
  const userName = useSelector((state) => state.auth.usuario.nome);

  const logout = () => {
    dispatch(logoutAction());
  };

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
                  to="/cardapio"
                >
                  Cardápio
                </SNavLink>
              </NavItem>

              {isAuthenticated() ? (
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
              ) : (
                ''
              )}

              {isAdmin ? (
                <NavItem>
                  <SNavLink
                    exact
                    tag={RRDNavLink}
                    activeClassName="active"
                    to="/cadastro"
                  >
                    Cadastro
                  </SNavLink>
                </NavItem>
              ) : (
                ''
              )}

              <NavItem>
                {userName ? (
                  <UncontrolledDropdown>
                    <DropdownToggle nav caret>
                      @{userName}
                    </DropdownToggle>
                    <DropdownMenu>
                      {isAdmin ? (
                        <>
                          <DropdownItem
                            onClick={() => history.push('/usuarios')}
                          >
                            Usuários
                          </DropdownItem>
                          <DropdownItem divider />
                        </>
                      ) : (
                        ''
                      )}
                      <DropdownItem onClick={logout}>Sair</DropdownItem>
                    </DropdownMenu>
                  </UncontrolledDropdown>
                ) : (
                  <SNavLink
                    exact
                    tag={RRDNavLink}
                    activeClassName="active"
                    to="/login"
                  >
                    Login
                  </SNavLink>
                )}
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
