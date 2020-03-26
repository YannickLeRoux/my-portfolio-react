import React from 'react';
import Elm from 'react-elm-components';
import MyElmComponent from '../../Main.elm';

import Overdrive from 'react-overdrive';

const Blog = () => {
  return (
    <React.Fragment>
      <div className="blog">
        <Overdrive id="main-focus" duration={500}>
          <h1 style={{ marginLeft: '65px' }}>Blog Posts</h1>
        </Overdrive>
        <Elm src={MyElmComponent.Elm.Main} />
      </div>
    </React.Fragment>
  );
};

export { Blog };
