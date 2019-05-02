import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";

class BeerList extends Component {
  render() {
    const { beer } = this.props;

    return (
      <Fragment>
        <div className="row">
          <div className="col-3">
            <Link to={`/beers/${beer._id}`}>
              <img src={beer.image_url} alt={beer.name} style={imgStyle} />
            </Link>
          </div>
          <div className="col-9">
            <h4>{beer.name}</h4>
            <h5 className="text-secondary">{beer.tagline}</h5>
            <p>
              <strong>Created by:</strong> {beer.contributed_by}
            </p>
          </div>
        </div>
      </Fragment>
    );
  }
}

const imgStyle = {
  width: "100%",
  maxHeight: "100px",
  objectFit: "contain"
};

export default BeerList;
