import React from 'react';


function CommentSection(props) {
    return (
        <div className='commentSection'>
            <i className="far fa-heart"></i>
            <i className="far fa-comment"></i>
            <div>
                <h3>{props.likes}</h3>
            </div>
            <h3>{props.comment.username}</h3>
            <p>{props.comment.text}</p>

            {props.timestamp} 
            <input value="" placeholder='Add a comment...' />
        </div>
    )
}

export default CommentSection;