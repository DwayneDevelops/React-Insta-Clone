import React from 'react'

class Login extends React.Component {
  state = {
    username: '',
    password: '',
  }

  change = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  onSubmit = (e) => {
    e.preventDefault();
    // this.props.onSubmit(this.state);
    this.setState({
      firstName: '',
      lastName: '',
      username: '',
      email: '',
      password: '',
    })
  }

  render(){
    return(
      <form>
        <input 
        value={this.state.username}
        name='username'
        placeholder='username'
        onChange={e => this.change(e)}
        />
        
        
        <input 
        name='password'
        type='password'
        value={this.state.password}
        placeholder='password'
        onChange={e => this.change(e)}
        />
        
        <button 
        className='Btn'
        onClick={ e => this.onSubmit(e)}>Login</button>
      </form>

    );

  }
}

export default Login;
