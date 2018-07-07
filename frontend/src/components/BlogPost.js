import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchSinglePost } from '../actions/fetchPosts';

class BlogPost extends Component {
  componentWillMount() {
    fetchSinglePost();
  }
    render() {
        return (
            <div className="blog-post">
        <div className="container">
          <h2 className="blog-post--title">Title</h2>
          <h6 className="blog-post--category">Category: </h6>
          <h6 className="blog-post--date">Date:</h6>
        </div>
        <div className="container">
          <hr />

          <div>
            <p className="blog-post--content">
               content
            </p>

          </div>
        </div>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ fetchSinglePost }, dispatch)
}
const mapStateToProps = (state) => {
  return {post: state.posts.current }
 }

export default connect(mapStateToProps,mapDispatchToProps)(BlogPost);