import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class Header extends Component {
  render() {
    const { authenticated } = this.props;
    return (
      <nav className="navbar navbar-expand-sm navbar-dark bg-danger mb-3 py-0 mt-3">
        <div>
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to="/" className="nav-link">
                <i className="fas fa-home" /> Home
              </Link>
            </li>

            {authenticated ? (
              <li className="nav-item" to="/logout">
                <Link to="/logout" className="nav-link">
                  <i className="fas fa-question" /> Logout
                </Link>
              </li>
            ) : (
              <li className="nav-item">
                <Link to="/login" className="nav-link">
                  <i className="fas fa-question" /> Login
                </Link>
              </li>
            )}
            {authenticated && (
              <li className="nav-item">
                <Link to="/create" className="nav-link">
                  <i className="fas fa-plus" /> Create Recipe
                </Link>
              </li>
            )}
          </ul>
        </div>
      </nav>
    );
  }
}

const mapStateToProps = state => ({
  authenticated: state.authenticated.authenticated
});

export default connect(mapStateToProps)(Header);
