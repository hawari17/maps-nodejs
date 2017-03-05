import React from 'react';
import {render} from 'react-dom';

class Map extends React.Component {

  constructor() {
    super();
    this.panToBandung = this.panToBandung.bind(this);
  }

  panToBandung() {
    const BANDUNG_POSITION = {
      lat: -6.9219222,
      lng: 107.6048659
    };

    this.map.panTo(BANDUNG_POSITION);
  }

  componentDidMount() {
    const MONAS_POSITION = {
      lat: -6.1753871,
      lng: 106.8249641
    };

    this.map = new google.maps.Map(this.refs.map, {
      center: MONAS_POSITION,
      zoom: 16
    });
  }

  render() {
    const mapStyle = {
      width: 500,
      height: 300,
      border: '1px solid black'
    };

    return (
      <div>
        <button onClick={this.panToBandung}>Pergi ke Bandung</button>
        <div ref="map" style={mapStyle}>I should be a map!</div>
      </div>
    );
  }
}

export default Map;
