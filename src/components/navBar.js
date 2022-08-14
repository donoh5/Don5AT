
import React from "react";
import { Nav, Navbar, Container, Row, Col, NavDropdown} from "react-bootstrap";
import { LinkContainer } from 'react-router-bootstrap';
import "bootstrap/dist/css/bootstrap.css";
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";

import CardComp from "./card";
import MainPage from "./mainPage";

function NavMenu(props) {

    return (
        <Router>
            <div className="App">
                <header className="App-header">
                    <Navbar bg="dark" variant="dark">
                        <Container>
                            <Navbar.Brand color="white">
                                <img
                                    alt="InHome Logo"
                                    src={require('../img/logo.png')}
                                    className="d-inline-block align-center nav-logo"
                                />{' '}
                                InHome
                            </Navbar.Brand>

                            <Nav className="justify-content-end">
                                <Nav>
                                    <Link to={"/inventory"}
                                        className="nav-link">
                                        'navbar_inventory'
                                    </Link>
                                </Nav>

                                <NavDropdown title={'navbar_MyAccount'} id="navbarScrollingDropdown">
                                    <LinkContainer to={"/setting"}>
                                        <NavDropdown.Item> 'navbar_edit_account'  </NavDropdown.Item>
                                    </LinkContainer>

                                    <NavDropdown.Divider />
                                    <LinkContainer to={"/"}>
                                        <NavDropdown.Item > 'navbar_Logout'  </NavDropdown.Item>
                                    </LinkContainer>

                                </NavDropdown> 

                            </Nav>
                        </Container>
                    </Navbar>
                </header>

                <Container>
                    <Row>
                        <Col md={12}>
                            <div>
                                <Routes>
                                    <Route exact path="/"
                                        element={<MainPage/>} />
                                    <Route path="/inventory"
                                        element={<MainPage/>} />
                                    <Route path="/setting"
                                        element={<MainPage/>} />
                                </Routes>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </Router>
    );
}

export default NavMenu;