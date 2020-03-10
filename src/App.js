import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.scss";
import HomePage from "./pages/Home";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route path="/">
              <HomePage />
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
