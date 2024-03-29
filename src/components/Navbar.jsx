import React, {Component} from 'react';
import { Nav, Navbar, NavbarBrand, NavbarToggler, Collapse, NavItem } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import TopBar from './TopBar';


class NavBar extends Component{
  constructor(props) {
    super(props);

    this.toggleNav = this.toggleNav.bind(this);
    this.state = {
      isNavOpen: false
    };
  }

  toggleNav(){
    this.setState({
      isNavOpen: !this.state.isNavOpen
    });
  }

  render() {
    return (
      <React.Fragment>
        <TopBar />
        <Navbar light expand="lg">
          <div className="container navbar my-3">
            <NavbarBrand className="mr-auto" href="/"> <img src="/assets/images/coffee.png" height="50" width="50" alt="logo" />
                <span className="logo">Coffee House</span>
            </NavbarBrand>
            <NavbarToggler onClick={this.toggleNav} />
            <Collapse isOpen={this.state.isNavOpen} navbar >
              <Nav navbar className="ml-auto" >
                <NavItem>
                  <NavLink className="nav-link" to="/home">
                    Home
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="nav-link" to="/about">
                    About
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="nav-link" to="/menu">
                    Menu
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="nav-link" to="/order">
                    Order
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="nav-link" to="/home">
                    Hiring
                  </NavLink>
                </NavItem>
              
              </Nav>
            </Collapse>
          </div>
        </Navbar>
      </React.Fragment>
    );
  }
}

export default NavBar;