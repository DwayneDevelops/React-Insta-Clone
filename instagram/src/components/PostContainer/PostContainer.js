import React from 'react';
import PropTypes from 'prop-types';
import Post from './Post';
import Time from '../CommentSection/Time';

import './PostContainer.css';



const PostContainer = props => {
  return (
    <div className='postContainer'>
  {props.posts.map(p => <Post post={p} key={p.id} />, p => <Time time={p} key={p.id}/>)}
    </div>        
  );
}

PostContainer.propTypes = {
  post: PropTypes.shape({
    id: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    thumbnailUrl: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
    likes: PropTypes.number.isRequired,
    timestamp: PropTypes.string.isRequired,
    comments: PropTypes.arrayOf(PropTypes.object).isRequired
  })
    
};

export default PostContainer;
