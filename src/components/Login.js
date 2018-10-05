import React, { Component } from 'react';
import { connect } from 'react-redux';
import { login } from '../actions/authentication';
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

    const { history } = this.props;

    authenticated
      ? history.push('/')
      : this.setState({ error: 'Användarnamn och/eller lösenord är fel' });
  };
  render() {
    const { error } = this.state;

    return (
      <div>
        {error && <p className="alert alert-danger">{error}</p>}
        <input
          type="text"
          placeholder="Användarnamn"
          id="username"
          name="username"
          onChange={this.onChange}
          value={this.state.username}
          className="form-control mt-2"
        />
        <input
          type="password"
          placeholder="Lösenord"
          id="password"
          name="password"
          onChange={this.onChange}
          value={this.state.password}
          className="form-control mt-2"
        />

        <button className="btn btn-danger mt-2" onClick={this.login}>
          Logga in
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
