import axios from 'axios';
import { FETCH_POSTS, FETCH_SINGLE_POST } from './types';

const ROOT_URL = 'https://yannick-dev.com/blog/api';

export const fetchPosts = () => {

  const request = axios.get(`${ROOT_URL}/post?format=json`);
  console.log(request);

  return {
    type: FETCH_POSTS,
    payload: request
  }
}

export const fetchSinglePost = (slug) => {

  const request = axios.get(`${ROOT_URL}/post/${slug}?format=json`);

  return {
    type: FETCH_SINGLE_POST,
    payload: request
  }
}

