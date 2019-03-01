import React, { Component } from 'react';
//import logo from './logo.svg';
import '../../App.css';
import MapContainer from '../../component/container/MapContainer';
import simpsontext from '../../image/simpsons_logo.png';
import spiderpig from '../../image/spiderpig_header.png';
import simpsons_header from '../../image/simpsons_header.png';

class DefaultLayout extends Component {
  render() {
    return (
      <div className="App">
      <div className="App-header">
      <img src={simpsontext} className="header-image-left"></img>
      <img src={spiderpig} className="header-image-center"></img>
      <img src={simpsons_header} className="header-image-right"></img>
      <div className="topp_menu">
      <button>Home</button>
      <button>Who are we?</button>
      <button>Place to be</button>
      </div>
      </div>
      <MapContainer/>
      </div>
    );
  }
}

export default DefaultLayout;
