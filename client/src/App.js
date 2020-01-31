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
}

export default App;
