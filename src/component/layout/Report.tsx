import React, { Component } from 'react';
import '../../App.css';
import PowerBI from '../../component/container/PowerBI';
import spiderpig from '../../image/spiderpig_header.png';
import simpsons_header from '../../image/simpsons_header.png';
import spiderpigs_head from '../../image/spiderpigs_head.png';

class Report extends Component {
    render() {
      return (
        <div className="App">
        <div className="App-header">
        <img src={spiderpigs_head} className="header-image-left"></img>
        <img src={spiderpig} className="header-image-center"></img>
        <img src={simpsons_header} className="header-image-right"></img>
        <div className="topp_menu">
        <a href="/home">Home</a>
        <a href="/report">Rapport</a>
        <a href="https://inworker.sharepoint.com/sites/ASPC2017">We love SharePoint</a>
        </div>
        </div>
        <PowerBI/>
        </div>
      );
    }
  }
  
  export default Report;
  