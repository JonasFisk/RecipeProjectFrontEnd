import React, { Component } from 'react';
import { connect } from 'react-redux';

import { addImageUrl } from '../actions/createRecipe';

class RecipeImg extends Component {
  state = {
    imageURL: '',
    error: ''
  };

  onChange = e => {
    const { error } = this.state;
    this.setState({ [e.target.name]: e.target.value });

    if (error) {
      this.setState({
        error: ''
      });
    }
  };
  onSubmit = e => {
    e.preventDefault();

    const { imageURL } = this.state;

    const urlRegex = new RegExp('(https?://.*.(?:png|jpg|jpeg))', 'i');

    if (urlRegex.test(imageURL)) {
      this.props.addImageUrl(imageURL);
      this.setState({
        imageURL: ''
      });
    } else {
      this.setState({
        error: 'Please enter a valid image URL'
      });
    }
  };

  render() {
    const { error } = this.state;
    return (
      <div className="mt-2">
        {error && <p className="alert alert-danger">{error}</p>}
        <div className="input-group">
          <input
            onChange={this.onChange}
            type="text"
            className="form-control"
            placeholder="Enter image URL"
            name="imageURL"
            id="imageURL"
            value={this.state.imageURL}
          />
          <div className="input-group-append">
            <button
              onClick={this.onSubmit}
              className="btn btn-outline-secondary"
              type="button"
            >
              Add image URL
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(
  null,
  { addImageUrl }
)(RecipeImg);
