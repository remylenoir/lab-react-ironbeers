import React, { Component, Fragment } from "react";
import axios from "axios";

import BeerSingle from "./../Single/BeerSingle";

class BeerRandomView extends Component {
  state = {
    beer: []
  };

  componentDidMount() {
    axios.get(`https://ironbeerapi.herokuapp.com/beers/random`).then(response => {
      this.setState({
        beer: response.data
      });
    });
  }

  render() {
    const { beer } = this.state;

    return (
      <Fragment>
        <div className="container">
          <div className="row py-4 px-2">
            <BeerSingle beer={beer} />
          </div>
        </div>
      </Fragment>
    );
  }
}
export default BeerRandomView;
