import React, { Component } from 'react';
import { Collapse, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';
import './NavMenu.css';
/*import * as images from '../Images';*/
import allianceLogo from '../Images/LandingPage/AllianceLogo.png';

export class NavMenu extends Component {
  static displayName = NavMenu.name;

  constructor (props) {
    super(props);

    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      collapsed: true
    };
  }

  toggleNavbar () {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }

  render() {
    return (
      <header>
            <Navbar className="navbar-expand-sm navbar-toggleable-sm ng-white border-bottom box-shadow mb-3" container light>
                <NavbarBrand tag={Link} to="/"><img src={allianceLogo} alt="Alliance Logo"></img></NavbarBrand>
          <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
          <Collapse className="d-sm-inline-flex flex-sm-row-reverse" isOpen={!this.state.collapsed} navbar>
                    <ul className="navbar-nav flex-grow mx-auto mt-2 mt-lg-0">
              <NavItem>
                <NavLink tag={Link} className="text-dark" to="/">Home</NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={Link} className="text-dark" to="/About">About</NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={Link} className="text-dark" to="/Services">Services</NavLink>
              </NavItem>
              <NavItem>
                 <NavLink tag={Link} className="text-dark" to="/ApplicationForm">Application Form Shortcut</NavLink>
              </NavItem>
                    </ul>
                    <ul className="navbar-nav flex-grow">
                        <NavLink tag={Link} className="text-dark" to="/"></NavLink>
                    </ul>
          </Collapse>
        </Navbar>
      </header>
    );
  }
}
