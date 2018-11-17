import React, { Component } from 'react';
import note from './res/note-add.svg';
import logo from './res/logo-black.svg';
import { Link } from "react-router-dom";

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
            <button onClick={buttonClick}><img src={note} alt="Add Cards" /></button>
         </div>

         {postBody}
      </div>
   </div>
   </>
);

export class PersonalPage extends Component {
   render() {
      const mockGroup = [
         // {id, checked, groupName, groupOwner}
         {id: "0xb23hyb1", checked: true, groupName: "Apples",  groupOwner: "alanxoc3"},
         {id: "03b23hyb1", checked: true, groupName: "oragnes", groupOwner: "alanxoc3"},
         {id: "03b23oyb1", checked: false, groupName: "pines",   groupOwner: "alanxoc3"},
         {id: "0xb13hyb1", checked: true, groupName: "Applas",  groupOwner: "alanxoc3"},
         {id: "03b22hyb1", checked: false, groupName: "odagnes", groupOwner: "alanxoc3"},
         {id: "03b23o4b1", checked: true, groupName: "p7nes",   groupOwner: "alanxoc3"},
      ];

      const rows = mockGroup.map((row) => {
         return <tr key={row.id}>
            <td>
               <div className="input-group">
                  <span className="input-group-addon con-squarify">
                     <input type="checkbox" value={row.checked} aria-label="group-checkbox" />
                  </span>
                  <span className="form-control con-squarify con-right-square">
                     <span className="con-group"> {row.groupName} </span> <span className="con-author"> - <Link to="#"> {row.groupOwner} </Link> </span>
                  </span>
               </div>
            </td>
         </tr>
      });

      const tbl = (
         <div className="table-responsive">
            <table className="table table-hover">
               <tbody>
                  {rows}
               </tbody>
            </table>
         </div>
      );

      return (
         <FrameWithButton
            title="Personal Collection"
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
