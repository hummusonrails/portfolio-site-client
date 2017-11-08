import React, { Component } from 'react';
import './App.css';
import './css/spa.css';
import {
  BrowserRouter as Router,
  Route, Switch
} from 'react-router-dom';
//import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import NavbarInstance from './components/Navbar';
import PortfolioIndex from './components/containers/PortfolioIndex';
import SPA from './components/containers/SPA';
import TechBlogIndex from './components/containers/TechBlogIndex';
import JewishBlogIndex from './components/containers/JewishBlogIndex';
import Contact from './components/Contact';
import ReactGA from 'react-ga';

const ReactRouter = () => (
  <Router>
    <div className="Routes">
      <div className="App-header">
        {NavbarInstance}
      </div>
      <br /><br /><br />
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/spa" component={SPA}/>
        <Route exact path="/portfolio" component={PortfolioIndex}/>
        <Route exact path="/blog/tech" component={TechBlogIndex}/>
        <Route exact path="/blog/jewish" component={JewishBlogIndex}/>
        <Route exact path="/contact" component={Contact}/>
      </Switch>
    </div>
  </Router>
)

class App extends Component {
  render() {
    ReactGA.initialize('UA-102303776-1');
    ReactGA.pageview(window.location.pathname + window.location.search);
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
