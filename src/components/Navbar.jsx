import React from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import Header from './Header';


function NavBar() {
  return (
    <React.Fragment>
      <Header />
      <Navbar light expand="md" sticky="top">
        <div className="container navbar my-3">
          <NavbarBrand className="mr-auto" href="/"> <img src="/assets/images/coffee.png" height="50" width="50" alt="logo" />
              <span className="logo">Coffee House</span>
          </NavbarBrand>
        </div>
      </Navbar>
    </React.Fragment>
  );
}

export default NavBar;