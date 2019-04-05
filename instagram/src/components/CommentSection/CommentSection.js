import React from 'react';
import Comment from './Comment';
import Time from '../CommentSection/Time'

import './CommentSection.css'

const CommentSection = props => {
    return (
        <div className='commentSection'>
            <div>
                <div className="buttons">
                    <i 
                    className="far fa-heart"
                    onClick={props.toggleItem}
                    ></i>
                    <i 
                    className="far fa-comment"></i>
                </div>

                <strong>{props.post.likes}</strong>
                <strong> likes</strong>
            </div>
            
            {props.post.comments.map( c => <Comment comment={c} key={c.id} />)}

            <Time time={props.post.timestamp}/>
                   
            <input className="input" placeholder='Add a comment...'  />
        </div>
    )
}

export default CommentSection;