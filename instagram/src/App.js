import React from 'react';

import './App.css';
import dummyData from './dummy-data';
import PostsPage from './components/PostContainer/PostsPage';
import Login from './components/Login/Login';
import withAuthenticate from './authentication/withAuthenticate';

const ComponentFromWithAuthenticate = withAuthenticate(PostsPage)(Login);
 
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
    };
  }
   
  toggleItem = (e) => {
    this.setState({
      likes: this.state.posts[0].likes ++ 
    })
    
  }
  
  
  

  componentDidMount() {
    this.setState({ posts: dummyData });
  }
  

  render() {
    return (
      <div className="App">
        <ComponentFromWithAuthenticate posts={this.state.posts}
        toggleItem={this.toggleItem} />
      </div>
    );
  }
}



export default App;
