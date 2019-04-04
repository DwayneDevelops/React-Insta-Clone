import React from 'react'

class Login extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      username: '',
      password: '',
    }
  }

  change = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  onSubmit = (e) => {
    const user = this.state.username;
    // e.preventDefault();
    // this.props.onSubmit(this.state);
    localStorage.setItem('user', user)
    window.location.reload();
    // this.setState({
    //   username: '',
    //   password: '',
    // })
  }

  render(){
    return(
      <form className="login-form">
        <h3>Welcome to the Instagram random stranger....sign in...</h3>
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
