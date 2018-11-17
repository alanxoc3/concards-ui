import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Switch, BrowserRouter, Route } from "react-router-dom";
import { MainPage, GlobalPage, ReviewPage, ErrorPage } from './pages';

ReactDOM.render(
   <BrowserRouter>
      <App>
         <Switch>
            <Route exact path="/" component={MainPage} />
            <Route exact path="/global" component={GlobalPage} />
            <Route exact path="/review" component={ReviewPage} />
            <Route component={ErrorPage} />
         </Switch>
      </App>
   </BrowserRouter>
   , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
