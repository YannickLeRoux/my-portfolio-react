import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchPosts } from '../actions/fetchPosts';

import BlogPostsListItem from './BlogPostsListItem';

class BlogPostsList extends Component {

  componentWillMount() {
    this.props.fetchPosts();
  }

  // <Link to={`posts/${post.slug}`} >

  renderPosts() {
    return (
      this.props.posts.map((post) => {
        <BlogPostsListItem
        key={post.id}
        title={post.title}
        author={post.author}
        category={post.category}
        date={post.published_date}
        slug={post.slug}
        content={post.text}
         />

      })
    );
  }

  render() {
    if (!this.props.posts) {
      return <div>Loading...</div>
    }

    return (
      <React.Fragment>
        {console.log(this.renderPosts)}
        {this.renderPosts()}
      </React.Fragment>

    );
  }
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ fetchPosts }, dispatch)

}
// const mapStateToProps = (state) => {
//   return {posts: state.posts.all }
// }
export default connect(null, mapDispatchToProps)(BlogPostsList);