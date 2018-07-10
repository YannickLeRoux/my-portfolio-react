import { FETCH_POSTS, FETCH_SINGLE_POST } from '../actions/types';

const INITIAL_STATE = { all: [], current: null };

export default (state=INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_SINGLE_POST:
      return { ...state, current: action.payload.data };
    case FETCH_POSTS:
      return { ...state, all: action.payload.data };
    default:
      return state;
  }

}