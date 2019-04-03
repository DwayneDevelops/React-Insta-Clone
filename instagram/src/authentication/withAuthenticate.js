import React from 'react';

const withAuthenticate = App =>
  class extends React.Component {
    render(){
    return <App posts={this.props.posts}/>;
    }

  }


export default withAuthenticate;
