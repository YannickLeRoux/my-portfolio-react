import React from 'react';
import { ApolloClient } from 'apollo-client';
import { createHttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { setContext } from 'apollo-link-context';
import { ApolloProvider } from 'react-apollo';
import BlogPostsList from '../../containers/BlogPostsList';

import Overdrive from 'react-overdrive';

const API = 'https://api-uswest.graphcms.com/v1/cjvx4oqyn96x401eto3px8p1q/master';

const httpLink = createHttpLink({
  uri: API
});

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = process.env.REACT_APP_BLOG_TOKEN;
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

const Blog = () => {
  return (
    <ApolloProvider client={client}>
      <React.Fragment>
        <div className="blog">
          <Overdrive id="main-focus" duration={500}>
            <h1 style={{ marginLeft: '65px' }}>Blog Posts</h1>
          </Overdrive>
          <BlogPostsList client={client} />
        </div>
      </React.Fragment>
    </ApolloProvider>
  );
};

export { Blog };
