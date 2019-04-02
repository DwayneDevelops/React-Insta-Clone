import React from 'react';


const CommentSection = props => {
    return (
        <div className='commentSection'>
            <i class="far fa-heart"></i>
            <i class="far fa-comment"></i>
            <div>
                <h3>{props.likes}</h3>
            </div>
            
            <p><h3>{props.comment.username}</h3>{props.comment.text}</p>

            {props.timestamp} 
            <input value="" placeholder='Add a comment...' />
        </div>
    )
}

export default CommentSection;