import React, { Component } from 'react';
import { Button, Modal, } from 'react-bootstrap';
import { FormGroup, ControlLabel, FormControl, } from 'react-bootstrap';

export class ConLoginModal extends Component {
   state = {
      email: "",
      password: "",
   }

   handleLogin = () => {
      this.props.handleLogin(this.state.email, this.state.password);
   }

   handleEmail    = (e) => { this.setState({email: e.target.value}); }
   handlePassword = (e) => { this.setState({password: e.target.value}); }

   render() {
      return (
         <Modal show={this.props.showLogin} onHide={this.props.loginClose}>
            <Modal.Header closeButton>
               <Modal.Title>Enter Your Information</Modal.Title>
            </Modal.Header>
            <Modal.Body>
               <form>
                   <FormGroup controlId="formSignupEmail">
                     <ControlLabel>Email</ControlLabel>
                     <FormControl
                        type="text"
                        value={this.state.email}
                        onChange={this.handleEmail}
                        placeholder="example@concards.net"
                     />
                   </FormGroup>
                   <FormGroup controlId="formSignupPassword">
                     <ControlLabel>Password</ControlLabel>
                     <FormControl
                        value={this.state.password}
                        type="password"
                        onChange={this.handlePassword}
                        placeholder="123456"
                     />
                   </FormGroup>
               </form>
            </Modal.Body>
            <Modal.Footer>
               <Button onClick={this.handleLogin}>Log In</Button>
            </Modal.Footer>
         </Modal>
      );
   }
}

export default ConLoginModal;
