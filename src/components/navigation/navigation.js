import React from 'react';
import Navbar from "reactstrap/es/Navbar";
import NavbarBrand from "reactstrap/es/NavbarBrand";
import Nav from "reactstrap/es/Nav";
import NavItm from "./navItm/navItm";

const Navigation = () => {
    return (
        <Navbar color="light" light expand="md">
            <NavbarBrand href="/">Test page</NavbarBrand>
            <Nav className="ml-auto" navbar>
                <NavItm to='/'>Home</NavItm>
                <NavItm to='/add'>Add</NavItm>
                <NavItm to='/about'>About</NavItm>
                <NavItm to='/contacts'>Contacts</NavItm>
            </Nav>
        </Navbar>
    );
};

export default Navigation;