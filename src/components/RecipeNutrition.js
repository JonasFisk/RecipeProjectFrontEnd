import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';

class RecipeNutrition extends Component {
  showNutritionValues() {
    const { ingredients } = this.props;
    const searchWords = ['Fett', 'Energi (kcal)', 'Protein'];
    const showNutrition = [];

    ingredients.forEach(ingredient => {
      ingredient.ingredient.Naringsvarden.forEach(naringsvarde => {
        searchWords.forEach(word => {
          if (naringsvarde.Namn === word) {
            const naringsvardeValue = parseFloat(
              naringsvarde.Varde.replace(',', '.')
            );
            const value =
              ((ingredient.units * ingredient.inGrams) / 100) *
              naringsvardeValue;
            const result = Math.round(value * 100) / 100;
            showNutrition.push({
              Enhet: naringsvarde.Enhet,
              Forkortning: naringsvarde.Forkortning,
              Namn: naringsvarde.Namn,
              SenastAndrad: naringsvarde.SenastAndrad,
              Varde: result
            });
          }
        });
      });
    });

    const values = _(showNutrition)
      .groupBy('Namn')
      .map((objs, key) => ({
        Namn: key,
        Varde: _.sumBy(objs, 'Varde')
      }))
      .value();

    return values.map(value => {
      return (
        <li className="list-group-item" key={value.Namn}>{`Name: ${
          value.Namn
        }: Value: ${value.Varde}`}</li>
      );
    });
  }

  showInstructions() {
    const { instructions } = this.props;

    return instructions.map(instruction => {
      return <li key={instruction}>{instruction}</li>;
    });
  }
  render() {
    const { image, name, tags, instructions, description } = this.props;
    return (
      <div>
        <div className="text-center">
          {name && <h3 className="mt-2">{name}</h3>}
          {image && (
            <img
              src={image}
              style={{ width: 250, height: 250 }}
              className="mt-2"
            />
          )}
          <div className="mt-2">{description && <p>{description}</p>}</div>
          <div className="mt-2">
            <ul className="list-group">{this.showNutritionValues()}</ul>
          </div>
          <div className="mt-2">
            {instructions.length > 0 && <p>Instructions:</p>}
            <ol>{this.showInstructions()}</ol>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  ingredients: state.createRecipe.recipeIngredients,
  image: state.createRecipe.imageURL,
  name: state.createRecipe.name,
  tags: state.createRecipe.tags,
  instructions: state.createRecipe.instructions,
  description: state.createRecipe.description
});

export default connect(mapStateToProps)(RecipeNutrition);
