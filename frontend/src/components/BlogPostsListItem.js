import React from 'react';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowCircleRight } from '@fortawesome/free-solid-svg-icons';

const formatDate = date => {
  const dateToFormat = new Date(date);

  return new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'long',
    day: '2-digit'
  }).format(dateToFormat);
};

const BlogPostsListItem = ({ id, title, author, category, date, slug, content }) => (
  <div className="blog-post">
    <div className="container">
      <Link to={`blog/${id}`} className="blog-post--title">
        <h2>{title}</h2>
      </Link>
      <h6 className="blog-post--category">Category: {category}</h6>
      <h6 className="blog-post--date">Date: {formatDate(date)}</h6>
    </div>
    <div className="container">
      <hr />

      <div>
        <p className="blog-post--excerpt">
          {content.markdown}
          <span>...</span>
        </p>

        <Link className="text-mute text-right" to={`blog/${slug}`}>
          <FontAwesomeIcon icon={faArrowCircleRight} /> Read more...
        </Link>
      </div>
    </div>
  </div>
);

export default BlogPostsListItem;
