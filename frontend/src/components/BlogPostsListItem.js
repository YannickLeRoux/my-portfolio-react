import React from 'react';
import { Link } from 'react-router-dom';

const BlogPostsListItem = ({ title, author, category, date, slug, content}) => {
  return (
    <div className="blog-post">
      <div className="container">
        <Link to={`blog/${slug}`} className="blog-post--title"><h2>{ title}</h2></Link>
        <h6 className="blog-post--category">Category: { category }</h6>
        <h6 className="blog-post--date">Date: { date }</h6>
      </div>
      <div className="container">
        <hr />

        <div>
          <p className="blog-post--excerpt">
            { content } <span>...</span>
          </p>

          <Link className="text-mute text-right" to={`blog/${slug}`} ><i className="fa fa-arrow-circle-right"></i> Read more...</Link>
        </div>
      </div>
    </div>

  );
};

export default BlogPostsListItem;