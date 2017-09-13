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
import TechBlogIndex from './components/containers/TechBlogIndex';
import JewishBlogIndex from './components/containers/JewishBlogIndex';

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
        <Route exact path="/blog/tech" component={TechBlogIndex}/>
        <Route exact path="/blog/jewish" component={JewishBlogIndex}/>
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
