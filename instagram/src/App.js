import React from 'react';

import './App.css';
import dummyData from './dummy-data';
import PostsPage from './components/PostContainer/PostsPage';
 
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
        <PostsPage posts={this.state.posts} />)}
      </div>
    );
  }
}



export default App;
