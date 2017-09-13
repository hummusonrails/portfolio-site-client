import React, { Component } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route, Switch
} from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import NavbarInstance from './components/Navbar';
import PortfolioIndex from './components/containers/PortfolioIndex';

const ReactRouter = () => (
  <Router>
    <div className="Routes">
      <div className="App-header">
        {Header}
        {NavbarInstance}
      </div>
      <br /><br /><br />
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/portfolio" component={PortfolioIndex}/>
      </Switch>
    </div>
  </Router>
)

class App extends Component {
  render() {
    return (
      <div className="App">

        < ReactRouter />
        <div className="footer">
          { Footer }
        </div>
    </div>
    );
  }
}

export default App;
