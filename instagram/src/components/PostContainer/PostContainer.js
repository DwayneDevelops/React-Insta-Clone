import React from 'react';
import Post from './Post';

import './PostContainer.css';



const PostContainer = props => {
  return (
    <div className='postContainer'>
      {props.posts.map(p => <Post post={p} key={p.id}
      toggleItem={props.toggleItem} />)}
    </div>        
  );
}

export default PostContainer;
