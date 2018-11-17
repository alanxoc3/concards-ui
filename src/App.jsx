import React, { Component } from 'react';
import ConNavbar from './ConNavbar';
import ConLoginModal from './ConLoginModal';
import ConSignupModal from './ConSignupModal';
import { withRouter, } from "react-router";
import * as ends from "./endpoints";

class App extends Component {
   state = {
      pathname: window.location.pathname,
      loggedIn: false,
      showLogin: false,
      showSignup: false,
   }

   loginOpen  = () => this.setState({showLogin: true});
   loginClose = () => this.setState({showLogin: false});

   signupOpen  = () => this.setState({showSignup: true});
   signupClose = () => this.setState({showSignup: false});

   handleLogin = (email, password) => {
      ends.login(email, password).then((token) => {
         this.setState({loggedIn: true, showLogin: false});
      })
   }

   handleSignup = (email, password) => {
      ends.signup(email, password).then((token) => {
         this.setState({loggedIn: true, showSignup: false});
      })
   }

   handleLogout = () => {
      this.setState({loggedIn: false});
   }

   componentDidUpdate(prevProps) {
      if (this.props.location.pathname !== prevProps.location.pathname) {
         this.setState({pathname: this.props.location.pathname});
      }
   }

   render() {
      return (
         <div className="con-app">
            <ConNavbar
               loggedIn={this.state.loggedIn}
               handleLogout={this.handleLogout}
               loginOpen={this.loginOpen}
               signupOpen={this.signupOpen}
               isGlobal={this.state.pathname === "/global"}
            />

            <ConLoginModal
               showLogin={this.state.showLogin}
               handleLogin={this.handleLogin}
               loginClose={this.loginClose}
            />

            <ConSignupModal
               showSignup={this.state.showSignup}
               handleSignup={this.handleSignup}
               signupClose={this.signupClose}
            />

            <div className="panel panel-default">
               {this.props.children}
            </div>
         </div>
      );
   }
}

export default withRouter(App);
