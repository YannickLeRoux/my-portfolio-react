import React, { useLayoutEffect } from 'react';

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

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

const App = () => {
  useLayoutEffect(() => {
    myScript();
    // fetch('https://portfolio-blog-api-971.herokuapp.com/posts').then(() => console.log('wake up heroku!'));
  }, []);
  return (
    <Provider store={createStoreWithMiddleware(reducers)}>
      <BrowserRouter>
        <div className="App">
          <MessengerCustomerChat
            pageId="320257491917941"
            appId="442917462905862"
            themeColor="#127ea5"
            shouldShowDialog
            debug
            loggedInGreeting="Hi this is Yannick! How are you doing today?"
            loggedOutGreeting="Hi this is Yannick! I am here to answer any question you may have."
          />
          <NavBar />
          <Main />
          <Footer />
        </div>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
