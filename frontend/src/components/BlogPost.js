import React, { useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import Prism from 'prismjs';
import Spinner from './Spinner';
import CodeBlock from './code-block';

import '../assets/css/Blog.css';
// import '../assets/css/prism.css';

const BlogPost = ({ data: { loading, error, post } }) => {
  console.log(error);
  // useEffect(() => {
  //   Prism.highlightAll();
  //   return () => Prism.highlightAll();
  // }, []);

  const formatDate = date => {
    const dateToFormat = new Date(date);

    return new Intl.DateTimeFormat('en-US', {
      year: 'numeric',
      month: 'long',
      day: '2-digit'
    }).format(dateToFormat);
  };

  if (error) return <em>Error fetching the post! </em>;
  if (!loading) {
    return (
      <article className="blog">
        <div className="blog-post">
          <div className="container">
            <h2 className="blog-post--title">{post.title}</h2>
            <h6 className="blog-post--category text-muted">Category: {post.category}</h6>
            <h6 className="blog-post--date text-muted">Published: {formatDate(post.createdAt)}</h6>
          </div>
          <div className="container">
            <hr />

            <div>
              <div className="blog-post--content">
                <ReactMarkdown source={post.content.markdown} renderers={{ code: CodeBlock }} />
              </div>
            </div>
          </div>
        </div>
      </article>
    );
  }
  return <Spinner />;
};

export const singlePost = gql`
  query singlePost($id: ID!) {
    post(where: { id: $id }) {
      id
      slug
      title
      createdAt
      content {
        markdown
      }
    }
  }
`;

export default graphql(singlePost, {
  options: ({ match }) => ({
    variables: {
      id: match.params.slug
    }
  })
})(BlogPost);
