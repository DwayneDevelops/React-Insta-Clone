import React from 'react';
import Comment from './Comment';

import './CommentSection.css'


const CommentSection = props => {
    return (
        <div className='commentSection'>
            <div>
                <div className="buttons">
                    <i className="far fa-heart"></i>
                    <i className="far fa-comment"></i>
                </div>

                <strong>{props.post.likes}</strong><strong> likes</strong>
            </div>
            
            {props.post.comments.map( c => <Comment comment={c} key={c.id}/>)}
            
            <span>2 HOURS AGO</span>
                      
            <input className="input" placeholder='Add a comment...'  />
        </div>
    )
}

export default CommentSection;