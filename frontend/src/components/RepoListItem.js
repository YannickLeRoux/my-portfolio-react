import React from 'react';
import github from '../assets/img/GitHub-Mark-64px.png';

const RepoListItem = ({ key, name, link, desc }) => {
  return (
    <React.Fragment>
      <li className="list-group-item repolistitem" key={ key }>
        <div className="row">
        <div className="col-md-2">
        <img src={ github }
        className="img-fluid" />
        </div>
        <div className="col-md-10">
        <a href={link}><h3>{ name }</h3></a>
        <p> { desc }</p>
        </div>
      </div>
      </li>
      <hr />
    </React.Fragment>

  );
};

export default RepoListItem;