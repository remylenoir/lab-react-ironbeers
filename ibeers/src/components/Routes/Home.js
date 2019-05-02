import React, { Component } from "react";
import { Link } from "react-router-dom";

class Home extends Component {
  render() {
    return (
      <div className="card-deck">
        <div className="card">
          <Link to="/beers">
            <img
              className="card-img-top"
              src="https://images.unsplash.com/photo-1505075106905-fb052892c116?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
              alt=""
              height="150"
              style={imgStyle}
            />
          </Link>
          <div className="card-body">
            <h5 className="card-title">All Beers</h5>
            <p className="card-text">
              Incididunt deserunt anim incididunt voluptate magna cillum. Occaecat ipsum nulla ex in enim
              dolor cillum consequat dolore nisi officia.
            </p>
          </div>
        </div>

        <div className="card">
          <Link to="/random-beer">
            <img
              className="card-img-top"
              src="https://images.unsplash.com/photo-1436076863939-06870fe779c2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
              alt=""
              height="150"
              style={imgStyle}
            />
          </Link>
          <div className="card-body">
            <h5 className="card-title">Random Beers</h5>
            <p className="card-text">
              Incididunt deserunt anim incididunt voluptate magna cillum. Occaecat ipsum nulla ex in enim
              dolor cillum consequat dolore nisi officia.
            </p>
          </div>
        </div>

        <div className="card">
          <Link to="/new-beer">
            <img
              className="card-img-top"
              src="https://images.unsplash.com/photo-1535958636474-b021ee887b13?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9"
              alt=""
              height="150"
              style={imgStyle}
            />
          </Link>
          <div className="card-body">
            <h5 className="card-title">New Beer</h5>
            <p className="card-text">
              Incididunt deserunt anim incididunt voluptate magna cillum. Occaecat ipsum nulla ex in enim
              dolor cillum consequat dolore nisi officia.
            </p>
          </div>
        </div>
      </div>
    );
  }
}

const imgStyle = {
  objectFit: "cover"
};

export default Home;
