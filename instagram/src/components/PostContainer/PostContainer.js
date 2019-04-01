import React from 'react';
import PropTypes from 'prop-types';
import CommentSection from '../CommentSection/CommentSection'

function PostContainer(props) {
  return (
    <div className='postContainer'>
        <div>
            <img src={props.thumbnailUrl} alt='' />
            <h3>{props.username}</h3>
        </div>
        <img src={props.imageUrl} alt='' />
        <div>
            <CommentSection  comment={props.comments} />
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
