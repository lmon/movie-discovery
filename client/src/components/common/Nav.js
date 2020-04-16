import React from 'react';
import {
    Navbar,
    NavbarBrand
  } from 'reactstrap';

const NavBar = () => {

    return (
        <div className="app-nav">
        <Navbar color="light" light expand="md">
            <NavbarBrand href="/">Lattice Movie Discovery</NavbarBrand>
        </Navbar>
        </div>
    );
}

export default NavBar;