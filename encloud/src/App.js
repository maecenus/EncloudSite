import React, { Component } from 'react';
import './App.css';
import Home from './components/Home'
import { BrowserRouter as Router, Route } from 'react-router-dom'


class App extends Component {
  render() {
    return (
        <div className="App">
            <Router>
                <Route component={Home} />
            </Router>
        </div>
    );
  }
}

export default App;
