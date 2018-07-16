import axios from 'axios';
import { FETCH_REPOS } from '../actions/types';

const URL = 'https://api.github.com/users/yannickleroux/repos';

export const fetchRepos = () => {
  const request = axios.get(URL)

  return(
        {
            type: FETCH_REPOS,
            payload: request
        }
    );
};
