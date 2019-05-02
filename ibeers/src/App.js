import React, { Component } from "react";
import { Route } from "react-router-dom";

import Home from "./components/Routes/Home";
import Random from "./components/Routes/Random";
import New from "./components/Routes/New";

import Beers from "./components/All/Beers";
import BeerSingleView from "./components/Single/BeerSingleView";

class App extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <Route exact path="/" component={Home} />
          <Route exact path="/beers" component={Beers} />
          <Route path="/beers/:_id" component={BeerSingleView} />
          <Route path="/random-beer" component={Random} />
          <Route path="/new-beer" component={New} />
        </div>
      </div>
    );
  }
}

export default App;
