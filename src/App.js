import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Navbar from '../src/components/Navbar';
import Header from '../src/components/Header';
import Body from './components/Body';
import Footer from './components/Footer';
import About from './components/About';
import Catering from './components/Catering';
import About2 from './components/About2';
import Menu from './components/Menu';

const App = () => {
  return (
    <Router>
      <Header />
      <Navbar />
      <Switch>
        <Route exact path="/" component={Body} />
        <Route exact path="/about" component={About} />
        <Route exact path="/catering" component={Catering} />
        <Route exact path="/about2" component={About2} />
        <Route exact path="/menu" component={Menu} />
      </Switch>
      <Footer />
    </Router>
  );
};

export default App;
