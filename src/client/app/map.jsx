import React from 'react';
import {render} from 'react-dom';

/* TODO add infobox available for each marker, only display it when clicked */
class Map extends React.Component {

  constructor() {
    super();
  }

  placePoi(event) {
    let place = {
      position: event.latLng,
    };

    this.props.onClick(place);

    const marker = new google.maps.Marker({
      position: event.latLng,
      map: this.map
    });
  }

  componentDidMount() {
    const self = this;
    const MONAS_POSITION = {
      lat: -6.1753871,
      lng: 106.8249641
    };

    this.map = new google.maps.Map(this.refs.map, {
      center: MONAS_POSITION,
      zoom: 16
    });

    this.map.addListener('click', function(event){
      self.placePoi.bind(self)(event);
    });
  }

  render() {
    const mapStyle = {
      height: 300,
      border: '1px solid black'
    };

    return (
      <div ref="map" style={mapStyle}>I should be a map!</div>
    );
  }
}

export default Map;
