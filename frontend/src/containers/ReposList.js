import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import _ from 'lodash';

import PropType from 'prop-types';

import { fetchRepos } from '../actions/FetchRepos';

import RepoListItem from '../components/RepoListItem';


class ReposList extends Component {

  componentWillMount() {
    this.props.fetchRepos();
  }

  render() {
    return (
      <div className="intro">
        <h1 className="text-center">Open Source Projects</h1>
        <h2>I currently have { this.props.repos.length } public repositories on GitHub</h2>
        <ul className="list-group">
          { this.props.repos.map((repo) => {
      return (
        <RepoListItem
          key= { repo.id }
          name={ repo.name }
          link={ repo.html_url }
          desc={ repo.description }

        />
      );
    }) }
        </ul>
      </div>
    );

  }
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ fetchRepos }, dispatch)
}
const mapStateToProps = (state) => {
  const reposOrdered = _.orderBy(state.repos.all,['updated_at'], ['desc']);
  return {repos: reposOrdered }
}
export default connect(mapStateToProps, mapDispatchToProps)(ReposList);

ReposList.propTypes = {
  repos: PropType.array.isRequired,
  fetchRepos: PropType.func.isRequired
};