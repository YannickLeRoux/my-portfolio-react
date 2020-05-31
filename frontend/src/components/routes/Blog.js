import React from 'react';
import Elm from 'react-elm-components';
import MyElmComponent from '../../Blog.elm';

import Overdrive from 'react-overdrive';

const Blog = props => {
  const forwardBlogId = ports => {
    ports.forwardBlogIdToReact.subscribe(id => {
      props.history.push(`blog/${id}`);
    });
  };
  return (
    <React.Fragment>
      <div className="blog">
        <Overdrive id="main-focus" duration={500}>
          <h1 style={{ marginLeft: '65px' }}>Blog Posts</h1>
        </Overdrive>
        <Elm src={MyElmComponent.Elm.Blog} ports={forwardBlogId} />
      </div>
    </React.Fragment>
  );
};

export { Blog };
