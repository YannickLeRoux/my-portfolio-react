import React, { useLayoutEffect } from 'react';
import { ApolloClient } from 'apollo-client';
import { createHttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { setContext } from 'apollo-link-context';
import { ApolloProvider } from 'react-apollo';
import PortfolioCard from '../PortfolioCard';
import ReposList from '../../containers/ReposList';

import Overdrive from 'react-overdrive';

import myScript from '../../assets/js/myscript';

import '../../assets/css/Portfolio.css';

const API = 'https://api.github.com/graphql';

const httpLink = createHttpLink({
  uri: API
});

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = process.env.REACT_APP_GITHUB_TOKEN;
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : ''
    }
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache()
});

const Portfolio = () => {
  useLayoutEffect(() => {
    myScript();
  }, []);

  return (
    <ApolloProvider client={client}>
      <React.Fragment>
        <div className="portfolio heading-padding">
          <div className="container">
            <div className="intro">
              <Overdrive id="main-focus" duration={500}>
                <h1 className="text-center">Websites</h1>
              </Overdrive>
              <h2 className="text-center">See below some samples of my work.</h2>
            </div>
            <div className="row articles">
              <div className="col-sm-6 col-md-4 item">
                <PortfolioCard
                  source={require('../../assets/img/djnewyork.jpg')}
                  link="https://dj-newyork.com"
                  title="DJ-NewYork Agency"
                  desc="Built in 2017, this website allows the user to browse the talents of this agency and ask for their availability."
                />
              </div>

              <div className="col-sm-6 col-md-4 item">
                <PortfolioCard
                  source={require('../../assets/img/fth.jpg')}
                  link="https://sharp-wiles-7282cc.netlify.com/"
                  title="Find The Hare"
                  desc="This is an order from a photo artist. ReactJS, CSS animations and randomly generated Gallery, no scroll. I'm currently improving it."
                />
              </div>

              <div className="col-sm-6 col-md-4 item">
                <PortfolioCard
                  source={require('../../assets/img/djyanic.jpg')}
                  link="https://dj-yanic.com"
                  title="DJ Yanic"
                  desc="I created this website in 2014 to promote my DJ activity. Built with Wordpress."
                />
              </div>
            </div>
          </div>
        </div>

        <div className="portfolio">
          <div className="container">
            <div className="intro">
              <h1 className="text-center">Web Apps</h1>
              <h2 className="text-center">Developed with Javascript and/or Python</h2>
            </div>
            <div className="row articles">
              <div className="col-sm-6 col-md-4 item">
                <PortfolioCard
                  source={require('../../assets/img/youtube-clone.png')}
                  link="https://objective-hamilton-338db1.netlify.com/"
                  title="Video Live Search"
                  desc="ReactJS Video Search App using Youtube API"
                />
              </div>
              <div className="col-sm-6 col-md-4 item">
                <PortfolioCard
                  source={require('../../assets/img/twitterpie.jpg')}
                  link="https://twitterpie.herokuapp.com/"
                  title="Twitter Pie"
                  desc="Flask app that takes a Twitter handle and returns a chart for the 10 most used words in the user feed."
                />
              </div>
              <div className="col-sm-6 col-md-4 item">
                <PortfolioCard
                  source={require('../../assets/img/receiptsorganizer.jpg')}
                  link="http://receipts-organizer.herokuapp.com/"
                  title="Receipts Organizer"
                  desc="Create a user account and upload your receipts scans to keep them organized by date and category. Work in progress"
                />
              </div>
            </div>
          </div>

          <div className="portfolio">
            <div className="container">
              <ReposList />
            </div>
          </div>
        </div>
      </React.Fragment>
    </ApolloProvider>
  );
};

export { Portfolio };
