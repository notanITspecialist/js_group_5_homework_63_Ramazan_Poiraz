import React from 'react';
import NavItem from "reactstrap/es/NavItem";
import {NavLink} from "react-router-dom";

const NavItm = (
    {children, to}
) => {
    return (
        <NavItem className='mx-1'>
            <NavLink to={to}>{children}</NavLink>
        </NavItem>
    );
};

export default NavItm;