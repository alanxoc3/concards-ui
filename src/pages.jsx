import React, { Component } from 'react';

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
         <Frame
            className="col-xs-10"
            title="Personal Collection"
            body="testing"
            postBody={tbl}
         >
            <p>Content</p>
         </Frame>
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
