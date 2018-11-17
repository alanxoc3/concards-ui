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

export class ConSignupModal extends Component {
   render() {
      return (
         <Modal show={this.props.showSignup} onHide={this.props.signupClose}>
            <Modal.Header closeButton>
               <Modal.Title>Create An Account</Modal.Title>
            </Modal.Header>
            <Modal.Body>
               <form>
                  <FieldGroup
                     id="formSignupUsername"
                     type="text" label="Username"
                     placeholder="example101"
                  />
                  <FieldGroup
                     id="formSignupEmail"
                     type="text" label="Email"
                     placeholder="example@concards.net"
                  />
                  <FieldGroup
                     id="formSignupPassword"
                     label="Password"
                     type="password"
                     placeholder="123456"
                  />
               </form>
            </Modal.Body>
            <Modal.Footer>
               <Button onClick={this.props.handleSignup}>Sign Up</Button>
            </Modal.Footer>
         </Modal>
      );
   }
}

export default ConSignupModal;
