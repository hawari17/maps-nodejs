import React from 'react';
import {render} from 'react-dom';
import Map from './map.jsx';
import { FormControl, Button } from 'react-bootstrap';

/* TODO persists places in storage combined with the name */
class Container extends React.Component {
  constructor() {
    super();
    this.state = {
      pName: "",
      places: [],
      showForm: false
    };
  }

  addPlace(position) {
    // let places = this.state.places;
    // places.push(place);

    this.setState({
      // places: places,
      pPosition: position,
      showForm: true
    });
  }

  handleNameChange(event) {
    this.setState({
      pName: event.target.value
    });
  }

  savePlace() {
    let places = this.state.places;
    let place = {
      name: this.state.pName,
      position: this.state.pPosition
    };
    places.push(place);

    this.setState({
      places: places,
      showForm: false
    });
  }

  render() {
    return (
      <div className="container">
        <div className="page-header">
          <h1>Google Maps</h1>
        </div>
        <div className="col-md-8">
          <Map onClick={(position) => this.addPlace(position)} />
        </div>
        <div className="col-md-4">
          {this.state.showForm &&
            <div>
              <FormControl type="text" value={this.state.name}
                placeholder="Enter Name" onChange={(event) => this.handleNameChange(event)} />
              <Button type="submit" onClick={() => this.savePlace()}>
                Submit
              </Button>
            </div>
          }
        </div>
      </div>
    );
  }
}

export default Container;
