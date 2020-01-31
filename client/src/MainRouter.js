import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import HomePage from "./components/homepage/HomePage";

class MainRouter extends Component{
    render(){
        return (
            <Router>
                <Switch>
                    <Route path="/" exact Component={HomePage} />
                        {/*<HomePage/>*/}
                    {/*</Route>*/}
                </Switch>
            </Router>
        )
    }
}

export default MainRouter;