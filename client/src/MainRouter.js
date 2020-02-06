import React, { Component } from 'react';
import { BrowserRouter , Switch, Route} from 'react-router-dom';
import HomePage from "./components/homepage/HomePage";

class MainRouter extends Component{
    render(){
        return (
            <BrowserRouter>
                <Switch>
                    <Route path="/" exact>
                        <HomePage />
                    {/* <Route path="/"  Component={HomePage} /> */}
                        {/*<HomePage/>*/}
                    </Route>
                    <Route path="/home" exact>
                        <div>Hello from home</div>
                    </Route>
                </Switch>
            </BrowserRouter>
        )
    }
}

export default MainRouter;