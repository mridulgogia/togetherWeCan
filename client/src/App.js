<<<<<<< HEAD
import React, {Component} from 'react';
import { Provider } from 'react-redux';
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import MainRouter from './MainRouter';

import HomePage from './components/homepage/HomePage';
// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import store from './store';

class App extends Component {
    render() {
    return (<div>
        <Provider store={store}>
            <MainRouter />
            {/*<div className="App" >*/}
            {/*      <Homepage/>*/}
            {/* </div>*/}
        </Provider>
        </div>
    )
    }
// =======
// import React, { Component } from "react";
// import { Provider } from "react-redux";
//
// import Homepage from "./components/homepage/HomePage";
//
// import store from "./store";
//
// class App extends Component {
//   render() {
//     return (
//       <Provider store={store}>
//         <div className="App">
//           <Homepage />
//         </div>
//       </Provider>
//     );
//   }
// >>>>>>> b1ad46fc48cf4892e62fe5b8089e90b5f0bcd995
}

export default App;
