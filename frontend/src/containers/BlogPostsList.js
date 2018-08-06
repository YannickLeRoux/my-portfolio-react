import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import _ from 'lodash';

import { fetchPosts } from '../actions/fetchPosts';

import BlogPostsListItem from '../components/BlogPostsListItem';
import Spinner from '../components/Spinner';


class BlogPostsList extends Component {
  componentWillMount() {
    this.props.fetchPosts();
  }

  renderPosts(post) {
    return (
      <BlogPostsListItem
          key={post.id}
          title={post.title}
          author={post.author}
          category={post.category}
          date={post.published_date}
          slug={post.slug}
          content={post.text}
           />


      );
  }

  render() {
    if (!this.props.posts) {
      return <Spinner />
    }

    return (
        <div>
        {this.props.posts.map(post => this.renderPosts(post))}
        </div>
    );
  }
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ fetchPosts }, dispatch)
}
const mapStateToProps = (state) => {
  const postsOrdered = _.orderBy(state.posts.all,['created_date'], ['desc']);
  return {posts: postsOrdered }
 }
export default connect(mapStateToProps, mapDispatchToProps)(BlogPostsList);