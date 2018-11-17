import React, { Component } from 'react';
import logo from './res/logo-black.svg';
import person from './res/person.svg';
import earth from './res/earth.svg';
import { Navbar, Nav, NavItem, } from 'react-bootstrap';

// loggedIn
// goHome
class ConNavbar extends Component {
   render() {
      let logView = (
         <>
            <NavItem eventKey={1} href="#" > <img alt="profile" src={person} /> </NavItem>
            <NavItem eventKey={2} href="#"> <img alt="all" src={earth} /> </NavItem>
            <NavItem eventKey={3} href="#"> Log Out </NavItem>
         </>
      );

      if (!this.props.loggedIn) {
         logView = (
            <NavItem eventKey={2} href="#"> Log In </NavItem>
         );
      }

      return (
         <>
         <Navbar fluid>
            <Navbar.Form pullLeft>
               <Navbar.Header>
                  <a href="/">
                     <Navbar.Brand>
                         <img src={logo} alt="logo"/> 
                     </Navbar.Brand>
                  </a>

               </Navbar.Header>
            </Navbar.Form>

            <Navbar.Form pullRight>
               <Nav> {logView} </Nav>
            </Navbar.Form>
         </Navbar>
         </>
      );
   }
}

export default ConNavbar;
