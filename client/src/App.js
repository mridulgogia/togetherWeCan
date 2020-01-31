import React, { Component } from "react";
import { Provider } from "react-redux";

import Homepage from "./components/homepage/HomePage";

import store from "./store";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <Homepage />
        </div>
      </Provider>
    );
  }
}

export default App;
