import React from 'react';
import Comment from './Comment';


const CommentSection = props => {
    return (
        <div className='commentSection'>
            <div>
                <div className="buttons">
                    <i className="far fa-heart"></i>
                    <i className="far fa-comment"></i>
                </div>

                <span>{props.post.likes}</span><span>Likes</span>
            </div>
            
            {props.post.comments.map( c => <Comment comment={c} key={c.id}/>)}
            
                      
            <input value="" placeholder='Add a comment...' />
        </div>
    )
}

export default CommentSection;