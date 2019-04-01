import React from 'react';

import './App.css';
import dummyData from './dummy-data';
import PostContainer from './components/PostContainer/PostContainer';
import SearchBar from './components/SearchBar/SearchBar';

class App extends React.Component {
  constructor() {
    super();
      this.state = {
      posts: dummyData
    } 

  }
  

  render() {
    return (
      <div className="App">
        <header className="instagram-container">
          <SearchBar />
          {this.state.posts.map((post) => <PostContainer key={post.timestamp} post={post} />)}
        </header>
      </div>
    );
  }
}



export default App;
