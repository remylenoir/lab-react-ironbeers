import React, { Component, Fragment } from "react";
import Header from "../UI/Header";
import BeerRandomView from "../Random/BeerRandomView";

class RandomBeer extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <BeerRandomView />
      </Fragment>
    );
  }
}
export default RandomBeer;
