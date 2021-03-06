import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addName } from '../actions/createRecipe';

class RecipeNameAndImg extends Component {
  state = {
    name: '',
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

    const { name } = this.state;

    if (name) {
      this.props.addName(name);
      this.setState({
        name: ''
      });
    } else {
      this.setState({
        error: 'Skriv in ett recept namn'
      });
    }
  };
  render() {
    const { error } = this.state;

    return (
      <div>
        <h3>Skapa ett recept:</h3>
        <p>Varje recept är för en portion</p>
        <div className="mt-3">
          {error && <p className="alert alert-danger">{error}</p>}
          <div className="input-group">
            <input
              type="text"
              placeholder="Skriv in ett recept namn"
              name="name"
              id="name"
              className="form-control"
              value={this.state.name}
              onChange={this.onChange}
            />
            <div className="input-group-append">
              <button
                className="btn btn-outline-secondary"
                type="button"
                onClick={this.onSubmit}
              >
                Lägg till namn
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(
  null,
  { addName }
)(RecipeNameAndImg);

/*
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addName, addImageUrl } from '../actions/createRecipe';

class RecipeNameAndImg extends Component {
  state = {
    imageURL: '',
    name: '',
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

    const { name, imageURL } = this.state;

    const urlRegex = new RegExp('(https?://.*.(?:png|jpg|jpeg))', 'i');

    if (name && urlRegex.test(imageURL)) {
      this.props.addName(name);
      this.props.addImageUrl(imageURL);
    } else {
      this.setState({
        error: 'Please enter a name and a valid image URL'
      });
    }
  };
  render() {
    const { error } = this.state;

    return (
      <div className="mt-5">
        {error && <p className="alert alert-danger">{error}</p>}
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <input
              className="form-control"
              type="text"
              id="name"
              name="name"
              onChange={this.onChange}
              value={this.state.name}
              placeholder="Enter recipe name"
            />
          </div>
          <div className="form-group">
            <input
              id="imageURL"
              className="form-control"
              placeholder="Enter image URL"
              onChange={this.onChange}
              name="imageURL"
              value={this.state.imageURL}
            />
          </div>
          <input
            type="submit"
            className="btn mb-3"
            value="Add name and image"
          />
        </form>
      </div>
    );
  }
}

export default connect(
  null,
  { addName, addImageUrl }
)(RecipeNameAndImg);


*/
