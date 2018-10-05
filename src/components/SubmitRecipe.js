import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createRecipe } from '../actions/recipe';
import { resetRecipe } from '../actions/createRecipe';

class SubmitRecipe extends Component {
  state = {
    error: ''
  };
  createRecipe = async () => {
    const {
      ingredients,
      name,
      imageURL,
      tags,
      description,
      instructions
    } = this.props;
    const recipe = {
      name,
      tags,
      instructions,
      ingredients,
      imageURL,
      description
    };
    await this.props.createRecipe(recipe);
    this.props.resetRecipe();
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
            <button
              className="btn btn-primary mt-2"
              onClick={this.createRecipe}
            >
              SKAPA RECEPT
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
  { createRecipe, resetRecipe }
)(SubmitRecipe);
