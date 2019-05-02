import React, { Component, Fragment } from "react";
import axios from "axios";

import Header from "./../UI/Header";
import BeerList from "./BeerList";

class Beers extends Component {
  state = {
    beers: []
  };

  componentDidMount() {
    axios.get("https://ironbeerapi.herokuapp.com/beers/all").then(response => {
      this.setState({
        beers: response.data
      });
    });
  }

  render() {
    const { beers } = this.state;

    return (
      <Fragment>
        <Header />
        <div className="container">
          <div className="row">
            {beers.map(beer => {
              return (
                <div className="col-xs-12 col-md-4 p-4 border" key={beer._id}>
                  <BeerList beer={beer} />
                </div>
              );
            })}
          </div>
        </div>
      </Fragment>
    );
  }
}

export default Beers;
