import React from 'react';
import './App.css';
import Navbar from '../src/components/Navbar'
import Header from '../src/components/Header'
import Body from './components/Body'
import Footer from './components/Footer'

function App() {
  return (
    <div className="App">
      <Header />
      <Navbar />
      <Body />
      <Footer />
    </div>
  );
}

export default App;
