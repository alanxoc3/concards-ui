import React, { Component } from 'react';
import note from './res/note-add.svg';
import logo from './res/logo-black.svg';

const Frame = ({title, body, postBody, ...props}) => (
   <>
   <div className="con-frame-center">
      <div className="con-panel-frame panel panel-default">
         <div className="panel-heading">
            <h3 className="panel-title">{title}</h3>
         </div>
         <div className="panel-body">
            {body}
         </div>

         {postBody}
      </div>
   </div>
   </>
);

const FrameWithButton = ({buttonClick, title, body, postBody, ...props}) => (
   <>
   <div className="con-frame-center">
      <div className="con-panel-frame panel panel-default">
         <div className="panel-heading con-panel-heading">
            <h3 className="panel-title">{title}</h3>
         </div>
         <div className="panel-body">
            {body}
         </div>

         {postBody}
      </div>
   </div>
   </>
);

export class PersonalPage extends Component {
   render() {
      const tbl = (
         <div className="table-responsive">
            <table className="table table-hover">
               <thead>
                  <tr>
                     <th>Check</th>
                     <th>Group Name</th>
                     <th>Group Owner</th>
                  </tr>
               </thead>
            </table>
         </div>
      );

      return (
         <FrameWithButton
            title="Personal Collection"
            body="testing"
            postBody={tbl}
         >
            <p>Content</p>
         </FrameWithButton>
      );
   }
}

export class ReviewPage extends Component {
   render() {
      return (
         <Frame>
            <p>Content</p>
         </Frame>
      );
   }
}

export class HomePage extends Component {
   render() {
      return (
         <Frame
            title="About Concards"
            body={
               <>
                  <img src={logo}/>
                  <p>A way to organize your flashcards. A way to organize your life.</p>
               </>
            }
         >
            <p>Welcome home Fido</p>
         </Frame>
      );
   }
}

export class GlobalPage extends Component {
   render() {
      return (
         <h1>Global Collection</h1>
      );
   }
}

export class ErrorPage extends Component {
   render() {
      return (
         <p>Four O Four</p>
      );
   }
}
