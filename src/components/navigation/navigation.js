import React from 'react';
import Navbar from "reactstrap/es/Navbar";
import NavbarBrand from "reactstrap/es/NavbarBrand";
import Nav from "reactstrap/es/Nav";
import NavItm from "./navItm/navItm";
import Container from "reactstrap/es/Container";

const Navigation = () => {
    return (
        <Navbar color="light" light expand="md">
            <Container>
                <NavbarBrand href="/">My Blog</NavbarBrand>
                <Nav className="ml-auto" navbar>
                    <NavItm to='/'>Home</NavItm>
                    <NavItm to='/add'>Add</NavItm>
                    <NavItm to='/about'>About</NavItm>
                    <NavItm to='/contacts'>Contacts</NavItm>
                </Nav>
            </Container>
        </Navbar>
    );
};

export default Navigation;