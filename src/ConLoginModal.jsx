import React, { Component } from 'react';
import { Button, Modal, } from 'react-bootstrap';
import { FormGroup, ControlLabel, FormControl, } from 'react-bootstrap';

function FieldGroup({ id, label, help, ...props }) {
  return (
    <FormGroup controlId={id}>
      <ControlLabel>{label}</ControlLabel>
      <FormControl {...props} />
    </FormGroup>
  );
}

export class ConLoginModal extends Component {
   loginButton = () => {
      this.props.loginClose();
      this.props.handleLogin();
   };

   render() {
      return (
         <Modal show={this.props.showLogin} onHide={this.props.loginClose}>
            <Modal.Header closeButton>
               <Modal.Title>Log In</Modal.Title>
            </Modal.Header>
            <Modal.Body>
               <form>
                  <FieldGroup
                     id="formLoginUsername"
                     type="text" label="Username or Email"
                     placeholder="example@concards.net"
                  />
                  <FieldGroup
                     id="formLoginPassword"
                     label="Password"
                     type="password"
                     placeholder="123456"
                  />
               </form>
            </Modal.Body>
            <Modal.Footer>
               <Button onClick={this.loginButton}>Log In</Button>
            </Modal.Footer>
         </Modal>
      );
   }
}

export default ConLoginModal;
