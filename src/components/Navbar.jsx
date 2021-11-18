import React from 'react';
import { Nav, Navbar, NavbarBrand, NavbarToggler, Collapse, NavItem, Jumbotron, Button } from 'reactstrap';



function NavBar() {

  return (
    <React.Fragment>
      <Navbar light expand="md">
        <div className="container navbar">
          <NavbarBrand className="mr-auto" href="/"> <img src="/assets/images/coffee.png" height="50" width="50" alt="logo" />
              <span className="logo">Coffee House</span>
          </NavbarBrand>
        </div>
      </Navbar>
    </React.Fragment>
  );
}

export default NavBar;
