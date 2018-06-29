import React from 'react';
import { Switch, Route } from 'react-router-dom';
import {
    Home,
    About,
    Portfolio,
    Blog,
    Contact
} from './routes';

const Main = () => {
  return (
    <React.Fragment>
      <Switch>
        <Route exact activeClassName="" path="/" component={Home} />
        <Route exact activeClassName="active" path="/about" component={About}/>
        <Route exact activeClassName="active" path="/portfolio" component={Portfolio} />
        <Route exact activeClassName="active" path="/blog" component={Blog} />
        <Route exact activeClassName="active" path="/contact" component={Contact} />
      </Switch>
    </React.Fragment>
  );
};

export default Main;