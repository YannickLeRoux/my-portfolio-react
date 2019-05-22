import React from 'react';

import BlogPostsListItem from '../components/BlogPostsListItem';
import Spinner from '../components/Spinner';

import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

const POSTS_PER_PAGE = 5;

const BlogPostsList = ({ data: { loading, error, posts, postsConnection, networkStatus }, loadMorePosts }) => {
  if (error) return <em>Error fetching posts!</em>;
  if (posts && postsConnection) {
    const areMorePosts = posts.length < postsConnection.aggregate.count;
    return (
      <section>
        <div>
          {posts.map(post => (
            <BlogPostsListItem
              key={post.id}
              id={post.id}
              title={post.title}
              author={post.author}
              category={post.category}
              date={post.createdAt}
              slug={post.slug}
              content={post.content.markdown}
            />
          ))}
        </div>
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
  return <Spinner />;
};

export const posts = gql`
  query posts($first: Int!, $skip: Int!) {
    posts(orderBy: createdAt_DESC, first: $first, skip: $skip) {
      id
      slug
      title
      createdAt
      updatedAt
      author
      category
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
