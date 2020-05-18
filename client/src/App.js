import React, {Component} from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from './components/homepage/HomePage';
import store from './store';
import Chat from "./components/chat/Chat";

class App extends Component {
    render() {
    return (<div>
        <Provider store={store}>
        <Router>
                <Switch>
                    <Route path="/" exact>
                        <HomePage />
                    </Route>
                    <Route path="/home" exact>
                        <div>Hello from home</div>
                    </Route>
                    <Route path="/chat" >
                      <Chat/>
                    </Route>
                </Switch>
            </Router>
        </Provider>
        </div>
    )
    }
}

export default App;
