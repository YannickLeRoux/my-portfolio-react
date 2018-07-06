import { FETCH_POSTS, FETCH_SINGLE_POST } from '../actions/types';

const INITIAL_STATE = { all: [], current: null };

export default (state=INITIAL_STATE, action) => {
  switch (action.type){
    case FETCH_POSTS:
      return { ...state, all: action.payload };
    case FETCH_SINGLE_POST:
      return { ...state, current: action.payload };
    default:
      return state;
  }

}