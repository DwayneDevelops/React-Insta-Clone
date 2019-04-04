import React from 'react';
import PropTypes from 'prop-types';
import './Comment.css';


function Comment(props) {
    return(
        <div className="comment">
            <h3>{props.comment.username}</h3>
            <p>{props.comment.text}</p>
        </div>
    )
}

Comment.propTypes = {
    comment: PropTypes.shape({
      username: PropTypes.string,  
      text: PropTypes.string,
    })
  };

export default Comment;