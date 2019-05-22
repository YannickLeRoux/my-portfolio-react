import React from 'react';

import BlogPostsList from '../../containers/BlogPostsList';

import Overdrive from 'react-overdrive';

const Blog = () => {
  return (
    <React.Fragment>
      <div className="blog">
        <Overdrive id="main-focus" duration={500}>
          <h1 style={{ marginLeft: '65px' }}>Blog Posts</h1>
        </Overdrive>
        <BlogPostsList />
      </div>
    </React.Fragment>
  );
};

export { Blog };
