import React, { Component } from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap'
import logo from '../encloud_logo1.png';

class Header extends Component {
    render() {
        return (
            <div>
                <Navbar id="App-header" fixedTop>
                    <Navbar.Header>

                            <Navbar.Brand >
                                <LinkContainer to="/" >
                                <img src={logo} id="App-logo" alt="logo" />
                                </LinkContainer>
                            </Navbar.Brand>

                        <Navbar.Toggle />
                    </Navbar.Header>
                    <Navbar.Collapse>
                        <Nav pullRight>
                            <LinkContainer id="nav-item-header" to="/mobile" >
                                <NavItem>
                                    Mobile
                                </NavItem>
                            </LinkContainer>
                            <LinkContainer id="nav-item-header" to="/cloud" >
                                <NavItem >
                                    Cloud
                                </NavItem>
                            </LinkContainer>
                            <LinkContainer id="nav-item-header" to="/web" >
                                <NavItem >
                                    Web
                                </NavItem>
                            </LinkContainer>
                            <LinkContainer id="nav-item-header" to="/contact" >
                                <NavItem >
                                    Contact
                                </NavItem>
                            </LinkContainer>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        )
    }
}

export default Header;