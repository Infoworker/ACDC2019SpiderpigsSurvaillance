import React, { Component } from 'react';

class PowerBI extends Component {
  render() {
    let url = 'https://app.powerbi.com/reportEmbed?reportId=2439f03c-6c66-4c09-8ba4-f08df108d4dd&autoAuth=true&ctid=00f02b55-ace5-4f7b-951c-a79675744bab'
    let content = '<iframe src='+ url +  'width="1140px" height="541.25px" frameborder="0" allowFullScreen></iframe>';
    return (
      <iframe src={url} width="1240px" height="800px" frameBorder="0" allowFullScreen></iframe>
   );
  }
}

export default PowerBI;


