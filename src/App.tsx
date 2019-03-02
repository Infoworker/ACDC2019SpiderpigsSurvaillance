import React, { Component } from 'react';
//import { Switch, Router,Redirect, Route } from 'react-router';
import DefaultLayout from './component/layout/Default';
import Report from './component/layout/Report';
import Map from './component/Map/Map';
import MapContainer from './component/container/MapContainer';

class App extends Component {
  render() {
    return (
     <DefaultLayout/>
    //  <Switch>
       
    //    <Redirect exact path="/" to="/Home"/>
    //    <Route path="/Home" component={DefaultLayout} /> 
    //    <Route path="/report" component={Report} /> 
    //    <Route path="/Whattodo" component={DefaultLayout} />       
    //  </Switch>
   );
  }
}

export default App;
