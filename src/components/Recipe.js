import React, { Component } from 'react';
import _ from 'lodash';

import { connect } from 'react-redux';

class Recipe extends Component {
  state = {
    showInfo: false,
    portions: 1
  };

  showtags() {
    const { tags } = this.props.recipe;

    return tags.map(tag => {
      return <li key={tag}>{tag}</li>;
    });
  }
  showInstructions() {
    const { instructions } = this.props.recipe;

    return instructions.map(instruction => {
      return <li key={instruction}>{instruction}</li>;
    });
  }
  showIngredients() {
    const { ingredients } = this.props.recipe;

    return ingredients.map(ingredient => {
      return (
        <li key={ingredient.ingredient.Namn}>
          {ingredient.units * this.state.portions}
          {ingredient.meassurement} {ingredient.ingredient.Namn}
        </li>
      );
    });
  }

  showNutritionValues() {
    const { ingredients } = this.props.recipe;
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
        }: Value: ${value.Varde * this.state.portions}`}</li>
      );
    });
  }
  onChange = e => {
    e.target.value > 0
      ? this.setState({ [e.target.name]: e.target.value })
      : this.setState({ portions: 1 });
  };
  render() {
    const { name, imageURL, description, tags } = this.props.recipe;

    return (
      <div className="card card-body mb-3">
        <h3>
          {name}

          <i
            onClick={() =>
              this.setState({
                showInfo: !this.state.showInfo
              })
            }
            className="fas fa-sort-down"
            style={{ cursor: 'pointer' }}
          />
        </h3>
        Portions:
        <input
          type="number"
          className="form-control"
          style={{ width: 50 }}
          value={this.state.portions}
          onChange={this.onChange}
          name="portions"
          id="portions"
        />
        {this.state.showInfo ? (
          <ul className="list-group">
            <li className="list-group-item" key={description}>
              Description: {description}
            </li>
            <li className="list-group-item" key={imageURL}>
              <img
                src={imageURL}
                style={{ width: 250, height: 250 }}
                className="mt-2"
              />
            </li>
            <li className="list-group-item" key={tags}>
              Tags: <ol>{this.showtags()}</ol>
            </li>
            <li className="list-group-item">
              Instructions: <ol>{this.showInstructions()}</ol>
            </li>
            <li className="list-group-item">
              Ingredients: <ol>{this.showIngredients()}</ol>
            </li>
            <li className="list-group-item">
              Nutrition: <ol>{this.showNutritionValues()}</ol>
            </li>
          </ul>
        ) : null}
      </div>
    );
  }
}

const mapDispatchToProps = {};

export default connect(
  null,
  mapDispatchToProps
)(Recipe);
