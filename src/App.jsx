import React, { Component } from 'react';
import ConNavbar from './ConNavbar';
import ConLoginModal from './ConLoginModal';
import ConSignupModal from './ConSignupModal';
import { withRouter, } from "react-router";
import { auth } from "./firebase";
import firebase from "./firebase";
import * as ends from "./endpoints";

class App extends Component {
   state = {
      pathname: window.location.pathname,
      showLogin: false,
      showSignup: false,
      authUser: null,
   }

   componentDidMount() {
      auth.onAuthStateChanged(authUser => {
         console.log("CHANGED!!!", authUser);
         authUser
            ? this.setState({ authUser })
            : this.setState({ authUser: null });
      });
   }

   loginOpen  = () => this.setState({showLogin: true});
   loginClose = () => this.setState({showLogin: false});

   signupOpen  = () => this.setState({showSignup: true});
   signupClose = () => this.setState({showSignup: false});

   handleLogin = (email, password) => {
      ends.login(email, password).then(() => {
         this.setState({showLogin: false});
      })
   }

   handleSignup = (email, password) => {
      ends.signup(email, password).then(() => {
         this.setState({showSignup: false});
      })
   }

   handleLogout = () => {
      console.log("TESTING");
      auth.signOut();
      // TODO: Delete this comment.
      //ends.import_cards_advanced({});
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
               loggedIn={this.state.authUser !== null}
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

            <div className="con-page-body">
               {this.props.children}
            </div>
         </div>
      );
   }
}

export default withRouter(App);
