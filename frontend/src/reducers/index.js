import { combineReducers } from 'redux';

import PostReducers from './PostsReducers';

const rootReducer = combineReducers({
  posts: PostReducers
});

export default rootReducer;
