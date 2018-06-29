import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import myScript from './assets/js/myscript';
import herojs from './assets/js/Paralax-Hero-Banner';

import NavBar from './components/NavBar';
import Main from './components/Main';
import Footer from './components/Footer';

class App extends Component {

  componentDidMount() {
    myScript();
    // code a corriger herojs();

  }

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <NavBar />
          <Main />
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
