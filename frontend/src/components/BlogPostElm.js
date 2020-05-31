import React, { useEffect } from 'react';
import Elm from 'react-elm-components';
import MyElmComponent from '../Post.elm';

const BlogPost = () => {
  return <Elm src={MyElmComponent.Elm.Post} flags={'4'} />;
};

export default BlogPost;
