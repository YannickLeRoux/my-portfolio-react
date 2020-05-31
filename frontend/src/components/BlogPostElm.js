import React from 'react';
import Elm from 'react-elm-components';
import MyElmComponent from '../Post.elm';

const BlogPost = props => {
  return <Elm src={MyElmComponent.Elm.Post} flags={props.match.params.id} />;
};

export default BlogPost;
