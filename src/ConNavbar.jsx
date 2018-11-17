import React, { Component } from 'react';
import logo from './res/logo-black.svg';
import person from './res/person.svg';
import earth from './res/earth.svg';
import { Navbar, Nav, NavItem, } from 'react-bootstrap';
import { Link } from "react-router-dom";

// handleLogout loggedIn loginOpen signupOpen
class ConNavbar extends Component {
   render() {
      let logView = (
         <>
            { this.props.isGlobal && <Navbar.Text> <Link to="/"> <img alt="personal collection" src={person} />  </Link> </Navbar.Text>}
            {!this.props.isGlobal && <Navbar.Text> <Link to="/global"> <img alt="global collection" src={earth} /> </Link> </Navbar.Text>}
            <Nav> <NavItem onClick={this.props.handleLogout}> Log Out </NavItem> </Nav>
         </>
      );

      if (!this.props.loggedIn) {
         logView = (
            <Nav>
               <NavItem onClick={this.props.signupOpen}> Sign Up </NavItem>
               <NavItem onClick={this.props.loginOpen}> Log In </NavItem>
            </Nav>
         );
      }

      return (
         <>
         <Navbar fluid>
            <Navbar.Form pullLeft>
               <Navbar.Header>
                  <Link to="/">
                     <Navbar.Brand>
                        <img src={logo} alt="logo"/> 
                     </Navbar.Brand>
                  </Link>

               </Navbar.Header>
            </Navbar.Form>

            <Navbar.Form pullRight>
               {logView}
            </Navbar.Form>
         </Navbar>
         </>
      );
}
}

export default ConNavbar;
