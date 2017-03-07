import React from 'react';
import {render} from 'react-dom';
import Map from './map.jsx';
import { FormControl } from 'react-bootstrap';

/* TODO persists places in storage combined with the name */
class Container extends React.Component {
  constructor() {
    super();
    this.state = {
      places: [],
      showForm: false
    };
  }

  addPlace(place) {
    let places = this.state.places;
    places.push(place);

    this.setState({
      places: places,
      place: place,
      showForm: true
    });
  }

  render() {
    return (
      <div className="container">
        <div className="page-header">
          <h1>Google Maps</h1>
        </div>
        <div className="col-md-8">
          <Map onClick={(place) => this.addPlace(place)} />
        </div>
        <div className="col-md-4">
          {this.state.showForm && <FormControl
            type="text"
            value={this.state.name}
            placeholder="Enter Name"
            />
          }
        </div>
      </div>
    );
  }
}

export default Container;
