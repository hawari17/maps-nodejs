import React from 'react';
import {render} from 'react-dom';
import Map from './map.jsx';

class Container extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="page-header">
          <h1>Google Maps</h1>
        </div>
        <Map />
      </div>
    );
  }
}

export default Container;
