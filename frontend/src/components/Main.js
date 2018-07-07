import React from 'react';
import { Switch, Route } from 'react-router-dom';
import {
    Home,
    About,
    Portfolio,
    Blog,
    Contact,
} from './routes';

import BlogPost from '../components/BlogPost';

const Main = () => {
  return (
    <main>

      <Switch>
        <Route exact activeClassName="" path="/" component={Home} />
        <Route exact activeClassName="active" path="/about" component={About}/>
        <Route exact activeClassName="active" path="/portfolio" component={Portfolio} />
        <Route path="/blog/:slug" component={BlogPost} />
        <Route exact activeClassName="active" path="/blog" component={Blog} />
        <Route exact activeClassName="active" path="/contact" component={Contact} />
      </Switch>
    </main>
  );
};

export default Main;