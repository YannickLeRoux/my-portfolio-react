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
        <Route activeClassName="active" path="/about" component={About}/>
        <Route activeClassName="active" path="/portfolio" component={Portfolio} />
        <Route path="/blog/:slug"
          render={(props) => <BlogPost {...this.props} {...props} />}/>
        <Route activeClassName="active" path="/blog" component={Blog} />
        <Route activeClassName="active" path="/contact" component={Contact} />
        <Route activeClassName="" path="/" component={Home} />
      </Switch>
    </main>
  );
};

export default Main;