import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'
import Header from "./Header";
import Intro from "./Intro";
import Mobile from "./Mobile";
import Cloud from "./Cloud";
import Web from "./Web";
import Contact from './Contact'

class Home extends Component {
    render() {
        return (
            <div>
                <Header/>
                <Route>
                    <Switch>
                        <Route exact path="/" component={Intro} />
                        <Route path="/mobile" component={Mobile} />
                        <Route path="/cloud" component={Cloud} />
                        <Route path="/web" component={Web} />
                        <Route path="/contact" component={Contact} />
                    </Switch>
                </Route>
            </div>
        )
    }
}

export default Home;