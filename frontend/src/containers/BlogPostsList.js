import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import _ from 'lodash';

import { fetchPosts } from '../actions/fetchPosts';

import BlogPostsListItem from '../components/BlogPostsListItem';
import Spinner from '../components/Spinner';

import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

const POSTS_PER_PAGE = 4;

const BlogPostsList = ({ data: { loading, error, posts, postsConnection, networkStatus }, loadMorePosts }) => {
  console.log(error);
  if (error) return <h1>Error fetching posts!</h1>;
  if (posts && postsConnection) {
    const areMorePosts = posts.length < postsConnection.aggregate.count;
    return (
      <section>
        <ul className="Home-ul">
          {posts.map(post => (
            <li className="Home-li" key={`post-${post.id}`}>
              <Link to={`/post/${post.id}`} className="Home-link">
                <div className="Home-placeholder">
                  <img
                    alt={post.title}
                    className="Home-img"
                    src={`https://media.graphcms.com/resize=w:100,h:100,fit:crop/${post.coverImage.handle}`}
                  />
                </div>
                <h3>{post.title}</h3>
              </Link>
            </li>
          ))}
        </ul>
        <div className="Home-showMoreWrapper">
          {areMorePosts ? (
            <button className="Home-button" disabled={loading} onClick={() => loadMorePosts()}>
              {loading ? 'Loading...' : 'Show More Posts'}
            </button>
          ) : (
            ''
          )}
        </div>
      </section>
    );
  }
  return <h2>Loading posts...</h2>;
};

export const posts = gql`
  query posts($first: Int!, $skip: Int!) {
    posts(orderBy: createdAt_DESC, first: $first, skip: $skip) {
      id
      slug
      title
      createdAt
      updatedAt
      content {
        markdown
      }
    }
    postsConnection {
      aggregate {
        count
      }
    }
  }
`;

export const postsQueryVars = {
  skip: 0,
  first: POSTS_PER_PAGE
};

export default graphql(posts, {
  options: {
    variables: postsQueryVars
  },
  props: ({ data }) => ({
    data,
    loadMorePosts: () => {
      return data.fetchMore({
        variables: {
          skip: data.posts.length
        },
        updateQuery: (previousResult, { fetchMoreResult }) => {
          if (!fetchMoreResult) {
            return previousResult;
          }
          return Object.assign({}, previousResult, {
            posts: [...previousResult.posts, ...fetchMoreResult.posts]
          });
        }
      });
    }
  })
})(BlogPostsList);

// class BlogPostsList extends Component {
//   componentDidMount() {
//     this.props.fetchPosts();
//   }

//   renderPosts(post) {
//     return (
//       <ErrorBoundary>
//         <BlogPostsListItem
//           key={post.id}
//           title={post.title}
//           author={post.author}
//           category={post.category}
//           date={post.published_date}
//           slug={post.slug}
//           content={post.text}
//         />
//       </ErrorBoundary>
//     );
//   }

//   render() {
//     if (this.props.posts.length === 0) {
//       return (
//         <div style={{ marginLeft: 60 }}>
//           <h2>
//             <em>Oops, something went wrong!</em>
//           </h2>
//           <h3>
//             <em>Please try again later...</em>
//           </h3>
//         </div>
//       );
//     }

//     return <div>{this.props.posts.map(post => this.renderPosts(post))}</div>;
//   }
// }

// const mapDispatchToProps = dispatch => bindActionCreators({ fetchPosts }, dispatch);
// const mapStateToProps = state => {
//   const postsOrdered = _.orderBy(state.posts.all, ['created_date'], ['desc']);
//   return { posts: postsOrdered };
// };
// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(BlogPostsList);
