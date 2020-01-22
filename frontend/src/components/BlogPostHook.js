import React, { useReducer, useEffect } from 'react';
import { FETCH_SINGLE_POST } from '../actions/types';
import PostReducer from '../reducers/PostsReducers';

import ReactMarkdown from 'react-markdown';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Prism from 'prismjs';
import { fetchSinglePost } from '../actions/fetchPosts';
import Spinner from './Spinner';

import '../assets/css/Blog.css';
import '../assets/css/prism.css';

const formatDate = date => {
  const dateToFormat = new Date(date);
  return new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'long',
    day: '2-digit'
  }).format(dateToFormat);
};

const BlogPost = props => {
  const [state, dispatch] = useReducer(PostReducer, {});

  useEffect(() => {
    dispatch({ type: FETCH_SINGLE_POST, payload: props.match.params.slug });
    Prism.highlightAll();
  });

  const { post } = props;
  if (!post) {
    return <Spinner />;
  }

  return (
    <div className="blog">
      <div className="blog-post">
        <div className="container">
          <h2 className="blog-post--title">{post.title}</h2>
          <h6 className="blog-post--category text-muted">
            Category: {post.category}
          </h6>
          <h6 className="blog-post--date text-muted">
            Published: {formatDate(post.published_date)}
          </h6>
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

const mapStateToProps = state => ({ post: state.posts.current });

export default connect(mapStateToProps, { fetchSinglePost })(BlogPost);
