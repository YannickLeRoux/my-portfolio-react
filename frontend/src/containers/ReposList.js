import React, { Component } from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';

import Spinner from '../components/Spinner';

import RepoListItem from '../components/RepoListItem';

const GET_REPOS = gql`
  query getRepos {
    user(login: "YannickLeRoux") {
      repositories(first: 20, orderBy: {field: UPDATED_AT, direction: DESC}) {
        edges {
          node {
            name
            description
            url
          }
        }
      }
    }
  }
  `;

class ReposList extends Component {

  render() {
    return (
      <div className="intro">
        <h1 className="text-center">Open Source Projects</h1>
        <Query query={GET_REPOS} >
        { ({loading, error,data}) => {
          if (error) return <div>There is a problem connecting to the GitHub API. Please visit <a href="https://github.com/YannickLeRoux?tab=repositories" target="_blank" rel="noopener noreferrer" >my Repos list here.</a></div>
          if (loading || !data ) return <Spinner />

          return (
            <React.Fragment>
            <h2>The { data.user.repositories.edges.length } latest public projects I worked on:</h2>
            <ul className="list-group">
              { data.user.repositories.edges.map((repo) => {
          return (
            <RepoListItem
              key={ repo.node.url }
              name={ repo.node.name }
              link={ repo.node.url }
              desc={ repo.node.description }

            />
          );
        }) }
        </ul>
        </React.Fragment>

          );

        }}
      </Query>
      </div>



    );

  }
};

export default ReposList;