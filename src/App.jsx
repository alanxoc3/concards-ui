import React, { Component } from 'react';
import ConNavbar from './ConNavbar';

class App extends Component {
   render() {
      return (
         <>
         <ConNavbar loggedIn={true}/>
         <div className="App">
            help me
         </div>
         </>
      );
   }
}

export default App;
