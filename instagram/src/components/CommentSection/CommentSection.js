import React from 'react';


function CommentSection(props) {
    return (
        <div className='commentSection'>
            <h3>{props.likes}</h3>
            <p><h3>{props.username}</h3>{props.text}</p>  
            <input value="" placeholder='Add a comment...' />
        </div>
    )
}

export default CommentSection;