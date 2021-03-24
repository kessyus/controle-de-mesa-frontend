import React, {useState} from 'react'
import {NavLink as RRDNavLink} from 'react-router-dom';
import {Collapse, Container, Nav, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink} from 'reactstrap'
import styled from 'styled-components'

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    
    
    return (
        <header>
            <SNavbar color="light" light expand="md">
                <Container>
                    <NavbarBrand tag={RRDNavLink} to="/"> Bistrô Carioca</NavbarBrand>
                    <NavbarToggler onClick={toggle} />
                    <SCollapse isOpen={isOpen} navbar>
                        <Nav className="mr-auto" navbar>
                            <NavItem>
                                <SNavLink exact tag={RRDNavLink} activeClassName="active" to="/">Mesas</SNavLink>
                            </NavItem>
                            <NavItem>
                            <SNavLink exact tag={RRDNavLink} activeClassName="active" to="/cardapio">Cardápio</SNavLink>
                            </NavItem>
                        </Nav>
                    </SCollapse>
                </Container>
            </SNavbar>
        </header>
    )
}

export default Header;

const SNavbar = styled(Navbar)`
    background-color: #2b2e4a !important;
    padding: 1px;

        a{
            color: #fff !important;
            text-decoration: none;
        }
`

const SNavLink = styled(NavLink)`
    margin: auto 5px;
    border-radius: 5px;

    &.active{
        color: #e84545 !important;
    }
`

const SCollapse = styled(Collapse)`
    flex-grow: 0;
`
