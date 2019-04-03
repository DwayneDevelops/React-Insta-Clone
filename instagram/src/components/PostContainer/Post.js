import React from 'react';
import CommentSection from '../CommentSection/CommentSection';

import './Post.css'

const Post = (props) => {
    return(
        <div className='postFrame'>
            <div className="postHeader">
                <img className="thumbnail" src={props.post.thumbnailUrl} alt='thumbnail' />
                <h3>{props.post.username}</h3>
            </div>
            <img src={props.post.imageUrl} alt='main post content' />
            <CommentSection post={props.post} />
        </div>
    )
}

export default Post;