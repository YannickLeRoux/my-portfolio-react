import React from 'react';
import RepoListItem from './RepoListItem';

const ReposList = ({ repos }) => {

  const reposItems = repos.map((repo) => {
    return (
      <RepoListItem
        key= { repo.id }
        name={ repo.name }
        link={ repo.html_url }
        desc={ repo.description }
      />

    );

  });

  return(
    <ul className="list-group">
      { reposItems }
    </ul>


  );
};

export default ReposList;