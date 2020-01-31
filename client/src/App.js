import React, { Component } from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route } from "react-router-dom";
// , Switch

import HomePage from "./components/homepage/HomePage";
import Chat from "./components/chat/Chat";

import store from "./store";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <Route exact path="/" component={HomePage} />
            <Route exact path="/chat" component={Chat} />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
