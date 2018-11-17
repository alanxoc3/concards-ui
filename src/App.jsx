import React, { Component } from 'react';
import ConNavbar from './ConNavbar';
import ConLoginModal from './ConLoginModal';
import { MainPage, GlobalPage, ReviewPage, ErrorPage } from './pages';
import { withRouter, } from "react-router";

class App extends Component {
   state = {
      pathname: window.location.pathname,
      loggedIn: false,
      showLogin: false,
   }

   loginOpen  = () => this.setState({showLogin: true});
   loginClose = () => this.setState({showLogin: false});

   // Takes a string, username and password.
   handleLogin = (username, password) => {
      // endpoint here
      this.setState({loggedIn: true});
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
               isGlobal={this.state.pathname === "/global"}
            />

            <ConLoginModal
               showLogin={this.state.showLogin}
               handleLogin={this.handleLogin}
               loginClose={this.loginClose}
            />

            {this.props.children}
         </div>
      );
   }
}

export default withRouter(App);
