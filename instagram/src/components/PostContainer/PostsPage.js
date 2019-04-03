import React from 'react';
import PostContainer from '../PostContainer/PostContainer';
import SearchBar from '../SearchBar/SearchBar';

function PostsPage(props) {
    
    return (
        <div className="postsPage">
        <SearchBar />
        <PostContainer posts={props.posts} />)}
        </div>
    );
    
}

export default PostsPage;
