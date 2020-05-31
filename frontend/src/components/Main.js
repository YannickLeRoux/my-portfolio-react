import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Home, About, Portfolio, Blog, Contact, FourOFour, Uses } from './routes';

import BlogPostElm from '../components/BlogPostElm';

const Main = () => {
  return (
    <main>
      <Switch>
        <Route activeClassName="active" path="/about" exact component={About} />
        <Route activeClassName="active" path="/uses" exact component={Uses} />
        <Route activeClassName="active" path="/portfolio" exact component={Portfolio} />
        <Route path="/blog/:id" component={BlogPostElm} />
        <Route activeClassName="active" path="/blog" exact component={Blog} />
        <Route activeClassName="active" path="/contact" exact component={Contact} />
        <Route activeClassName="" path="/" exact component={Home} />
        <Route component={FourOFour} />
      </Switch>
    </main>
  );
};

export default Main;
