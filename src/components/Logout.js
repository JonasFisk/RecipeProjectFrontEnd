import React, { Component } from 'react';
import { logout } from '../actions/authentication';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Logout extends Component {
  logout = () => {
    this.props.logout();
  };
  render() {
    const { authenticated } = this.props;
    return (
      <div>
        {authenticated ? (
          <Link className="btn btn-danger" onClick={this.logout} to="/">
            Logout
          </Link>
        ) : (
          <p>You are not logged in</p>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  authenticated: state.authenticated.authenticated
});

export default connect(
  mapStateToProps,
  { logout }
)(Logout);
