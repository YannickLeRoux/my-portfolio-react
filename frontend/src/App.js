import React, { Component } from 'react';

import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import reducers from './reducers';
import promise from 'redux-promise';

import { BrowserRouter } from 'react-router-dom';
import './App.css';
import myScript from './assets/js/myscript';

import NavBar from './components/NavBar';
import Main from './components/Main';
import Footer from './components/Footer';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

class App extends Component {


  componentDidMount() {
    myScript();
    // code a corriger herojs();

  }

  render() {
    return (
      <Provider store={createStoreWithMiddleware(reducers)}>
        <BrowserRouter>
          <div className="App">
            <NavBar />
            <Main />
            <Footer />
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
