import React, { Component } from 'react';

import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import promise from 'redux-promise';
import { BrowserRouter } from 'react-router-dom';
import MessengerCustomerChat from 'react-messenger-customer-chat';

import reducers from './reducers';

import './App.css';
import myScript from './assets/js/myscript';

import NavBar from './components/NavBar';
import Main from './components/Main';
import Footer from './components/Footer';
import ChatBot from './components/ChatBot';

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
            <MessengerCustomerChat
              pageId="320257491917941"
              appId="442917462905862"
              themeColor="#127ea5"
            />
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
