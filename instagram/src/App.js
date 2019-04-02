import React from 'react';

import './App.css';
import dummyData from './dummy-data';
import PostContainer from './components/PostContainer/PostContainer';
import SearchBar from './components/SearchBar/SearchBar';

class App extends React.Component {
  constructor() {
    super();
      this.state = {
      posts: []
    };

  }

  componentDidMount() {
    this.setState({ posts: dummyData });
  }
  

  render() {
    return (
      <div className="App">
        <div className="instagram-container">
          <SearchBar />
        </div>
        {this.state.posts.map((post) => <PostContainer key={post.id} post={post} />)}
      </div>
    );
  }
}



export default App;
