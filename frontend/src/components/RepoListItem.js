import React from 'react';
import PropTypes from 'prop-types';

import github from '../assets/img/GitHub-Mark-64px.png';

const RepoListItem = ({ name, link, desc }) => {
  return (
    <React.Fragment key={name}>
      <li className="list-group-item repolistitem">
        <div className="row">
          <div className="col-md-2">
            <img src={ github }
              className="img-fluid"
              alt="GitHub Logo"
            />
          </div>
          <div className="col-md-10">
            <a href={link} target="_blank" rel="noopener noreferrer"><h3 className="repo-title">{ name }</h3></a>
            <p className="repo-description"> { desc }</p>
          </div>
        </div>
      </li>
      <hr />
    </React.Fragment>

  );
};

RepoListItem.defaultProps = {
  name: '',
  link: 'https://github.com/YannickLeRoux',
  desc: 'No Description'
};

RepoListItem.propTypes = {
  name: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  desc: PropTypes.string,
};

export default RepoListItem;