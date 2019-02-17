import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Home, About, Portfolio, Blog, Contact, FourOFour } from './routes';

import BlogPost from '../components/BlogPost';

const Main = () => (
  <main>
    <Switch>
      <Route activeClassName="active" path="/about" exact component={About} />
      <Route activeClassName="active" path="/portfolio" exact component={Portfolio} />
      <Route path="/blog/:slug" render={props => <BlogPost {...props} />} />
      <Route activeClassName="active" path="/blog" exact component={Blog} />
      <Route activeClassName="active" path="/contact" exact component={Contact} />
      <Route activeClassName="" path="/" exact component={Home} />
      <Route component={FourOFour} />
    </Switch>
  </main>
);

export default Main;
