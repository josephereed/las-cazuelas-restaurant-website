import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Navbar from '../src/components/Navbar';
import Header from '../src/components/Header';
import Body from './components/Body';
import Footer from './components/Footer';
import About from './components/About';

function App() {
  return (
    <div className="App">
      <Switch>
        <Router>
        <Header />
        <Navbar />
        <Route exact path="/" component={Body} />
        <Route exact path="/about" component={About} />
        <Footer />
        </Router>
      </Switch>
    </div>
  );
}

export default App;
