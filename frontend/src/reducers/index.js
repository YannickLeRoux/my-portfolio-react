import { combineReducers } from 'redux';

import PostReducers from './PostsReducers';
import ReposReducers from './ReposReducers';

const rootReducer = combineReducers({
  posts: PostReducers,
  repos: ReposReducers
});

export default rootReducer;
