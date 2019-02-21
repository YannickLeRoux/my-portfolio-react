import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import _ from 'lodash';

import { fetchPosts } from '../actions/fetchPosts';

import BlogPostsListItem from '../components/BlogPostsListItem';
import Spinner from '../components/Spinner';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { error: null, errorInfo: null };
  }

  componentDidCatch(error, errorInfo) {
    // Catch errors in any components below and re-render with error message
    this.setState({
      error,
      errorInfo
    });
    // You can also log error messages to an error reporting service here
  }

  render() {
    if (this.state.errorInfo) {
      // Error path
      return (
        <div>
          <h2>Something went wrong.</h2>
          <details style={{ whiteSpace: 'pre-wrap' }}>
            {this.state.error && this.state.error.toString()}
            <br />
            {this.state.errorInfo.componentStack}
          </details>
        </div>
      );
    }
    // Normally, just render children
    return this.props.children;
  }
}

class BlogPostsList extends Component {
  componentDidMount() {
    this.props.fetchPosts();
  }

  renderPosts(post) {
    return (
      <ErrorBoundary>
        <BlogPostsListItem
          key={post.id}
          title={post.title}
          author={post.author}
          category={post.category}
          date={post.published_date}
          slug={post.slug}
          content={post.text}
        />
      </ErrorBoundary>
    );
  }

  render() {
    if (this.props.posts.length === 0) {
      return (
        <div style={{ marginLeft: 60 }}>
          <h2>
            <em>Oops, something went wrong!</em>
          </h2>
          <h3>
            <em>Please try again later...</em>
          </h3>
        </div>
      );
    }

    return <div>{this.props.posts.map(post => this.renderPosts(post))}</div>;
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({ fetchPosts }, dispatch);
const mapStateToProps = (state) => {
  const postsOrdered = _.orderBy(state.posts.all, ['created_date'], ['desc']);
  return { posts: postsOrdered };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BlogPostsList);
