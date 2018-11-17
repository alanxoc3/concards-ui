import React, { Component } from 'react';
import logo from './res/logo-black.svg';
import person from './res/person.svg';
import earth from './res/earth.svg';
import { Navbar, Nav, NavItem, } from 'react-bootstrap';
import { Link } from "react-router-dom";
import * as ends from "./endpoints"; //TODO remove this

function LinkIcon({alt, src, route, ...props}) {
   return <Link to={route}> <img className="con-nav-icon" alt={alt} src={src} /> </Link>
}

function NavHolder({selectIndex, handleLogout, ...props}) {
   let items = props.children.map((item, i) => {
      return <li key={i} role="presentation" className={(i === selectIndex) && "active" || ""}> { item } </li>
   });

   return (
      <ul className="nav navbar-nav"> {items} </ul>
   );
}

// handleLogout loggedIn loginOpen signupOpen
class ConNavbar extends Component {
   render() {
      let logView = (

         <NavHolder selectIndex={this.props.isGlobal && 1 || 0 }>
            <LinkIcon route="/"       src={person} alt="person collection" />
            <LinkIcon route="/global" src={earth} alt="global collection" />
            <Link to="" onClick={this.props.handleLogout}> Log Out </Link>
         </NavHolder>
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
