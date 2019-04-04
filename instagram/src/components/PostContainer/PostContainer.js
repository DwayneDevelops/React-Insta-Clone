import React from 'react';
import Post from './Post';

import './PostContainer.css';



const PostContainer = props => {
  return (
    <div className='postContainer'>
      {props.posts.map(p => <Post post={p} key={p.id} />)}
    </div>        
  );
}

export default PostContainer;
