import React, { Component } from 'react';
import { removeIngredient } from '../actions/createRecipe';

import { connect } from 'react-redux';

class RecipeNutrition extends Component {
  removeIngredient(ingredient) {
    this.props.removeIngredient(ingredient);
  }
  render() {
    const { ingredients } = this.props;
    return (
      <div>
        <ul className="list-group">
          {ingredients.map(ingredient => (
            <li className="list-group-item" key={ingredient.ingredient.Namn}>
              {`Ingredient Name: ${ingredient.ingredient.Namn}. Units: ${
                ingredient.units
              }. Meassurement: ${ingredient.meassurement}. Units per gram: ${
                ingredient.inGrams
              }`}
              <button
                className="btn btn-danger ml-3"
                onClick={this.removeIngredient.bind(this, ingredient)}
              >
                Remove Ingredient
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  ingredients: state.createRecipe.recipeIngredients,
  units: state.createRecipe.units,
  amount: state.createRecipe.amount
});

export default connect(
  mapStateToProps,
  { removeIngredient }
)(RecipeNutrition);
