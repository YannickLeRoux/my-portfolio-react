import React from 'react';
import { Switch, Route } from 'react-router-dom';
import {
  Home,
  About,
  Portfolio,
  Blog,
  Contact,
  FourOFour,
  Uses
} from './routes';

import BlogPost from '../components/BlogPost';

const Main = () => {
  return (
    <main>
      <Switch>
        <Route activeClassName="active" path="/about" exact component={About} />
        <Route activeClassName="active" path="/uses" exact component={Uses} />
        <Route
          activeClassName="active"
          path="/portfolio"
          exact
          component={Portfolio}
        />
        <Route path="/blog/:slug" component={BlogPost} />
        <Route activeClassName="active" path="/blog" exact component={Blog} />
        <Route
          activeClassName="active"
          path="/contact"
          exact
          component={Contact}
        />
        <Route activeClassName="active" path="/" exact component={Home} />
        <Route component={FourOFour} />
      </Switch>
    </main>
  );
};

export default Main;
