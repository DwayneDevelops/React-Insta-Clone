import React from 'react';
import Comment from './Comment';


function CommentSection(props) {
    return (
        <div className='commentSection'>
            <i className="far fa-heart"></i>
            <i className="far fa-comment"></i>
        
            <Comment />
                        
            <input value="" placeholder='Add a comment...' />
        </div>
    )
}

export default CommentSection;