import React, { Component } from 'react';
import { Switch, Router,Redirect, Route } from 'react-router';
import DefaultLayout from './component/layout/Default';
import Map from "../src/component/container/MapContainer"

class App extends Component {
  render() {
    return (
     <Switch>
       <Redirect exact path="/" to="/Home"/>
       <Route path="/Home" component={Map} /> 
       <Route path="/Whoarewe" component={DefaultLayout} /> 
       <Route path="/Whattodo" component={DefaultLayout} />       
     </Switch>
   );
  }
}

export default App;
