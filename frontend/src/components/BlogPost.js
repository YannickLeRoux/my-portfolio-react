import React, { Component } from 'react';
import ReactMarkdown from 'react-markdown';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchSinglePost } from '../actions/fetchPosts';

// import '../assets/css/vim.css';

class BlogPost extends Component {

  componentWillMount() {
    this.props.fetchSinglePost(this.props.match.params.slug);
  }

  formatDate(date) {
    const dateToFormat = new Date(date)

    return (
      new Intl.DateTimeFormat('en-US', {
      year: 'numeric',
      month: 'long',
      day: '2-digit'
  }).format(dateToFormat)
    );
  }


  render() {
    const { post } = this.props;



    if (!post) {
      return <div className="text-center">...Loading...</div>
    }
    return (

      <div className="blog">
        <div className="blog-post">
          <div className="container">
            <h2 className="blog-post--title">{post.title}</h2>
            <h6 className="blog-post--category">Category: { post.category}</h6>
            <h6 className="blog-post--date">Published: { this.formatDate(post.published_date) }</h6>
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
  }
}


const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ fetchSinglePost }, dispatch)
}

function mapStateToProps(state) {
  return { post: state.posts.current }
}

export default connect(mapStateToProps, mapDispatchToProps)(BlogPost);