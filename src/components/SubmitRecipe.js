import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createRecipe } from '../actions/recipe';

class SubmitRecipe extends Component {
  state = {
    error: ''
  };
  createRecipe = () => {
    const {
      ingredients,
      name,
      imageURL,
      tags,
      description,
      instructions
    } = this.props;
    /*
    if (
      ingredients &&
      name &&
      imageURL &&
      tags &&
      description &&
      instructions
    ) {*/
    const recipe = {
      name,
      tags,
      instructions,
      ingredients,
      imageURL,
      description
    }; /*
      this.setState({
        error: ''
      });
*/
    this.props.createRecipe(recipe);
    /*
    } else {
      this.setState({
        error: 'Missing one of several requiered values'
      });
    }*/
  };
  render() {
    const { error } = this.state;
    const {
      ingredients,
      name,
      imageURL,
      tags,
      description,
      instructions
    } = this.props;
    return (
      <div>
        {error && <p className="alert alert-danger">{error}</p>}

        {ingredients &&
          name &&
          imageURL &&
          tags.length > 0 &&
          description &&
          instructions.length > 0 &&
          ingredients.length > 0 && (
            <button className="btn btn-primary" onClick={this.createRecipe}>
              CREATE RECIPE
            </button>
          )}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  ingredients: state.createRecipe.recipeIngredients,
  name: state.createRecipe.name,
  imageURL: state.createRecipe.imageURL,
  tags: state.createRecipe.tags,
  description: state.createRecipe.description,
  instructions: state.createRecipe.instructions
});

export default connect(
  mapStateToProps,
  { createRecipe }
)(SubmitRecipe);

/*
ingredients: state.createRecipe.ingredients

ingredients: [],
  recipeIngredients: [],
  selectedIngredient: {},
  name: '',
  imageURL: '',
  tags: [],
  allTags: [],
  description: '',
  instructions: []
*/
