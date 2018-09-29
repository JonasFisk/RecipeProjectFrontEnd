import React, { Component } from 'react';
import { logout } from '../actions/authentication';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Logout extends Component {
  logout = () => {
    this.props.logout();
  };
  render() {
    return (
      <div>
        <Link className="btn btn-danger" onClick={this.logout} to="/">
          Logout
        </Link>
      </div>
    );
  }
}

export default connect(
  null,
  { logout }
)(Logout);
