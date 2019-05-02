import React, { Component, Fragment } from "react";
import axios from "axios";

import BeerSingle from "./BeerSingle";
import Header from "../UI/Header";

class BeerSingleView extends Component {
  state = {
    beer: []
  };

  componentDidMount() {
    const { _id } = this.props.match.params;

    axios.get(`https://ironbeerapi.herokuapp.com/beers/single/${_id}`).then(response => {
      this.setState({
        beer: response.data
      });
    });
  }

  render() {
    const { beer } = this.state;

    return (
      <Fragment>
        <Header />
        <div className="container">
          <div className="row py-4 px-2">
            <BeerSingle beer={beer} />
          </div>
        </div>
      </Fragment>
    );
  }
}
export default BeerSingleView;
