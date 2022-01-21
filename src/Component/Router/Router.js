import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "../../Pages/Home";
import Complete from "../../Pages/complete"
import Pending from "../../Pages/pending"

export class Router extends Component {
  render() {
    return (
      <>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/pending" component={Pending} />
            <Route exact path="/Complete" component={Complete} />

          </Switch>
        </BrowserRouter>
      </>
    );
  }
}

export default Router;
