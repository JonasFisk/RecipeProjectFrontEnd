import React, { Component } from 'react';
import { connect } from 'react-redux';
import { login } from '../actions/authentication';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';

class Login extends Component {
  state = {
    username: '',
    password: '',
    error: ''
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  login = async () => {
    const { username, password } = this.state;

    await this.props.login(username, password);

    const { authenticated } = this.props;

    console.log(authenticated);

    const { history } = this.props;

    authenticated
      ? history.push('/')
      : this.setState({ error: 'Username and/or Password is incorrect' });
  };
  render() {
    const { error } = this.state;
    const { authenticated } = this.props;
    return (
      <div>
        {error && <p className="alert alert-danger">{error}</p>}
        <input
          type="text"
          placeholder="Enter Username"
          id="username"
          name="username"
          onChange={this.onChange}
          value={this.state.username}
          className="form-control mt-2"
        />
        <input
          type="password"
          placeholder="Enter Password"
          id="password"
          name="password"
          onChange={this.onChange}
          value={this.state.password}
          className="form-control mt-2"
        />

        <button className="btn btn-danger mt-2" onClick={this.login}>
          Login
        </button>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  authenticated: state.authenticated.authenticated
});

export default withRouter(
  connect(
    mapStateToProps,
    { login }
  )(Login)
);

/* <input
className="form-control"
type="number"
id="units"
placeholder="Enter Units"
onChange={this.onChange}
name="units"
value={this.state.units}
/>


<Link
          className="btn btn-danger mt-2"
          onClick={this.login}
          to={authenticated ? '/' : '/login'}
        >
          Login
        </Link>

*/
