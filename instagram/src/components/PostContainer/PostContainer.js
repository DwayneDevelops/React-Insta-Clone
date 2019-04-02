import React from 'react';
import PropTypes from 'prop-types';
import CommentSection from '../CommentSection/CommentSection'


function PostContainer(props) {
  return (
    <div className='postContainer'>
        <div className='postHeader'>
            <img src={props.post.thumbnailUrl} alt='profile thumbnail' />
            <h3>{props.post.username}</h3>
        </div>
        <img src={props.post.imageUrl} alt='main post image' />
        <div>
            <CommentSection />
        </div>         
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
