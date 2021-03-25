import React, {useState} from 'react'
import {NavLink as RRDNavLink} from 'react-router-dom';
import {Collapse, Container, Nav, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink} from 'reactstrap'
import styled from 'styled-components'
import {GiKnifeFork} from 'react-icons/gi'

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    
    
    return (
        <header>
            <SNavbar color="light" dark expand="md">
                <SContainer>
                    <NavbarBrand tag={RRDNavLink} to="/" id="logoMain"> <IconLogo />&nbsp; Bistrô Carioca</NavbarBrand>
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
                </SContainer>
            </SNavbar>
        </header>
    )
}

export default Header;

const SNavbar = styled(Navbar)`
    background-color: #2b2e4a !important;
        a{
            color: #fff !important;
            text-decoration: none;
        }
`

const SContainer = styled(Container)`
    display:flex;
    flex-direction: row;
    align-content: flex-start;

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

const IconLogo = styled(GiKnifeFork)`
    font-size: 22px;
    margin-bottom: 4px;

    @media (max-width: 767.98px) {
        margin-left: 5px;
    }

`
