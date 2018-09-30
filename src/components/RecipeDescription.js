import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addDescription } from '../actions/createRecipe';

class RecipeDescription extends Component {
  state = {
    description: ''
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  submit = e => {
    e.preventDefault();
    const { description } = this.state;
    this.props.addDescription(description);

    this.setState({
      description: ''
    });
  };

  render() {
    const { description } = this.state;

    return (
      <div className="mt-2">
        <div className="input-group">
          <input
            className="form-control"
            type="text"
            name="description"
            id="description"
            value={description}
            onChange={this.onChange}
            placeholder="Enter a description"
          />
          <div className="input-group-append">
            <button
              onClick={this.submit}
              type="button"
              className="btn btn-outline-secondary"
            >
              Add description
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(
  null,
  { addDescription }
)(RecipeDescription);
