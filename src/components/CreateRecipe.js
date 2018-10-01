//import React from 'react';
import SelectIngredient from './SelectIngredient';
import ShowIngredients from './ShowIngredients';
import RecipeNutrition from './RecipeNutrition';
import ModifyRecipe from './ModifyRecipe';
import RecipeName from './RecipeName';
import SelectTags from './SelectTags';
import RecipeDescription from './RecipeDescription';
import AddInstructions from './AddInstructions';
import SubmitRecipe from './SubmitRecipe';
import RecipeImg from './RecipeImg';

import React, { Component } from 'react';

import { connect } from 'react-redux';

class CreateRecipe extends Component {
  render() {
    const { authenticated } = this.props;

    return (
      <div>
        {authenticated ? (
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <div className="row">
                  <div className="col-md-12">
                    <RecipeName />
                    <RecipeImg />

                    <SelectTags />
                    <RecipeDescription />

                    <SelectIngredient />
                    <ModifyRecipe />
                    <AddInstructions />
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <RecipeNutrition />
                <ShowIngredients />
                <SubmitRecipe />
              </div>
            </div>
          </div>
        ) : (
          <p>Please log in to create a recipe</p>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  authenticated: state.authenticated.authenticated
});

export default connect(mapStateToProps)(CreateRecipe);
