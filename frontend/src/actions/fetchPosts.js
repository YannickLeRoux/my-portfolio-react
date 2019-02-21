import axios from 'axios';
import { FETCH_POSTS, FETCH_SINGLE_POST } from './types';

//const ROOT_URL = 'https://yannick-dev.com/blog/api';
const ROOT_URL = 'https://165.227.212.4/blog/api';  //maybe add port 22

export const fetchPosts = () => {

  const request = axios.get(`${ROOT_URL}/post?format=json`);

  return {
    type: FETCH_POSTS,
    payload: request
  };
};

export const fetchSinglePost = (slug) => {

  const requestSingle = axios.get(`${ROOT_URL}/post/${slug}?format=json`);

  return {
    type: FETCH_SINGLE_POST,
    payload: requestSingle
  };
};
