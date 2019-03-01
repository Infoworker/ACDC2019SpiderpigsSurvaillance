import React, { Component } from 'react';
import { Switch, Router,Redirect, Route } from 'react-router';
import DefaultLayout from './component/layout/Default';

class App extends Component {
  render() {
    return (
     <Switch>
       <Redirect exact path="/" to="/Home"/>
       <Route path="/Home" component={DefaultLayout} /> 
       <Route path="/Whoarewe" component={DefaultLayout} /> 
       <Route path="/Whattodo" component={DefaultLayout} />       
     </Switch>
   );
  }
}

export default App;
