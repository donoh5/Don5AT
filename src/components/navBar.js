
import React from "react";
import { Nav, Navbar, Container, Row, Col, NavDropdown} from "react-bootstrap";
import { LinkContainer } from 'react-router-bootstrap';
import "bootstrap/dist/css/bootstrap.css";
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";

import CardComp from "./card";
import MainPage from "./mainPage";

function NavMenu(props) {

    return(
        <header class="text-gray-600 body-font">
  <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <nav class="flex lg:w-2/5 flex-wrap items-center text-base md:ml-auto">
      <a class="mr-5 hover:text-gray-900">First Link</a>
      <a class="mr-5 hover:text-gray-900">Second Link</a>
      <a class="mr-5 hover:text-gray-900">Third Link</a>
      <a class="hover:text-gray-900">Fourth Link</a>
    </nav>
    <a class="flex order-first lg:order-none lg:w-1/5 title-font font-medium items-center text-gray-900 lg:items-center lg:justify-center mb-4 md:mb-0">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-10 h-10 text-white p-2 bg-blue-500 rounded-full" viewBox="0 0 24 24">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
      </svg>
      <span class="ml-3 text-xl">Tailblocks</span>
    </a>
    <div class="lg:w-2/5 inline-flex lg:justify-end ml-5 lg:ml-0">
      <button class="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">Button
        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-1" viewBox="0 0 24 24">
          <path d="M5 12h14M12 5l7 7-7 7"></path>
        </svg>
      </button>
    </div>
  </div>
</header>
    )

    // return (
    //     <Router>
            
    //         <div className="App">
    //             <header className="App-header">
    //                 <Navbar bg="dark" variant="dark">
    //                     <Container>
    //                         <Navbar.Brand color="white">Don's Portfolio</Navbar.Brand>

    //                         <Nav className="justify-content-end">
    //                             <Nav>
    //                                 <Link to={"/inventory"}
    //                                     className="nav-link">
    //                                     'navbar_inventory'
    //                                 </Link>
    //                             </Nav>

    //                             <NavDropdown title={'navbar_MyAccount'} id="navbarScrollingDropdown">
    //                                 <LinkContainer to={"/setting"}>
    //                                     <NavDropdown.Item> 'navbar_edit_account'  </NavDropdown.Item>
    //                                 </LinkContainer>

    //                                 <NavDropdown.Divider />
    //                                 <LinkContainer to={"/"}>
    //                                     <NavDropdown.Item > 'navbar_Logout'  </NavDropdown.Item>
    //                                 </LinkContainer>

    //                             </NavDropdown> 

    //                         </Nav>
    //                     </Container>
    //                 </Navbar>
    //             </header>

    //             <Container>
    //                 <Row>
    //                     <Col md={12}>
    //                         <div>
    //                             <Routes>
    //                                 <Route exact path="/"
    //                                     element={<MainPage/>} />
    //                                 <Route path="/inventory"
    //                                     element={<MainPage/>} />
    //                                 <Route path="/setting"
    //                                     element={<MainPage/>} />
    //                             </Routes>
    //                         </div>
    //                     </Col>
    //                 </Row>
    //             </Container>
    //         </div>
    //     </Router>
    // );
}

export default NavMenu;