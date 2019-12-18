import React from 'react';
import Navbar from "reactstrap/es/Navbar";
import NavbarBrand from "reactstrap/es/NavbarBrand";
import Nav from "reactstrap/es/Nav";

const Navigation = () => {
    return (
        <Navbar color="light" light expand="md">
            <NavbarBrand href="/">Test page</NavbarBrand>
            <Nav className="ml-auto" navbar>
            </Nav>
        </Navbar>
    );
};

export default Navigation;