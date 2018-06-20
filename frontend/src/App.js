import React, { Component } from 'react';
import './App.css';

import NavBar from './components/NavBar';
import Hero from './components/Hero';
import HomePageContent from './components/HomePageContent';
import Footer from './components/Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <Hero />
        <HomePageContent />
        <Footer />

      </div>
    );
  }
}

export default App;
