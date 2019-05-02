import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";

class BeerSingle extends Component {
  render() {
    const { beer } = this.props;

    return (
      <Fragment>
        <div className="col-xs-12 col-md-4">
          <Link to={`/beers/${beer._id}`}>
            <img src={beer.image_url} alt={beer.name} style={imgStyle} />
          </Link>
        </div>
        <div className="col-xs-12 col-md-8 py-3">
          {/* Name, tagline, Attenuation level and Date */}
          <div className="row">
            <div className="col-8">
              <h2>{beer.name}</h2>
              <h5 className="text-secondary">{beer.tagline}</h5>
            </div>
            <div className="col-4">
              <h3 className="text-secondary">{beer.attenuation_level}</h3>
              {/* {beer.first_brewed} */} MM-YYYY
            </div>
          </div>
          {/* Description and creator */}
          <div>
            <p>{beer.description}</p>
            <p className="text-secondary">
              <strong>{beer.contributed_by}</strong>
            </p>
          </div>
        </div>
      </Fragment>
    );
  }
}

const imgStyle = {
  width: "100%",
  maxHeight: "200px",
  objectFit: "contain"
};

export default BeerSingle;
