import React, { useLayoutEffect, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Prism from 'prismjs';
import { fetchSinglePost } from '../actions/fetchPosts';
import Spinner from './Spinner';

import '../assets/css/Blog.css';
import '../assets/css/prism.css';

const BlogPost = props => {
  const { fetchSinglePost, match, post } = props;

  useLayoutEffect(() => {
    fetchSinglePost(match.params.slug);
  }, []);

  useEffect(() => {
    Prism.highlightAll();
    return () => Prism.highlightAll();
  });

  const formatDate = date => {
    const dateToFormat = new Date(date);

    return new Intl.DateTimeFormat('en-US', {
      year: 'numeric',
      month: 'long',
      day: '2-digit'
    }).format(dateToFormat);
  };

  if (!post) {
    return <Spinner />;
  }

  return (
    <div className="blog">
      <div className="blog-post">
        <div className="container">
          <h2 className="blog-post--title">{post.title}</h2>
          <h6 className="blog-post--category text-muted">Category: {post.category}</h6>
          <h6 className="blog-post--date text-muted">Published: {formatDate(post.published_date)}</h6>
        </div>
        <div className="container">
          <hr />

          <div>
            <div className="blog-post--content">
              <ReactMarkdown source={post.text} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ fetchSinglePost }, dispatch);
};

const mapStateToProps = state => ({ post: state.posts.current });

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BlogPost);
