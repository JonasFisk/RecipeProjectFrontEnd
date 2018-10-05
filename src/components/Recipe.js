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
    const searchWords = [
      'Fett',
      'Energi (kcal)',
      'Protein',
      'Kolhydrater',
      'Salt',
      'Socker totalt',
      'Summa mättade fettsyror',
      'Summa enkelomättade fettsyror',
      'Summa fleromättade fettsyror'
    ];
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
            let newName;
            if (naringsvarde.Namn.includes('Summa')) {
              newName = naringsvarde.Namn.slice(5, naringsvarde.Namn.length);
              newName = newName[1].toUpperCase() + newName.slice(2);
            } else {
              newName = naringsvarde.Namn;
            }
            showNutrition.push({
              Enhet: naringsvarde.Enhet,
              Forkortning: naringsvarde.Forkortning,
              Namn: newName,
              SenastAndrad: naringsvarde.SenastAndrad,
              Varde: value
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
        <li className="list-group-item" key={value.Namn}>{`${value.Namn}: ${(
          value.Varde * this.state.portions
        )
          .toFixed(2)
          .replace('.', ',')}g`}</li>
      );
    });
  }
  onChange = e => {
    e.target.value > 0
      ? this.setState({ [e.target.name]: e.target.value })
      : this.setState({ portions: 0 });
  };
  render() {
    const { name, imageURL, description, tags } = this.props.recipe;

    return (
      <div className="card card-body mb-3 mt-2">
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
        Portioner:
        <input
          type="number"
          className="form-control"
          style={{ width: 100 }}
          value={this.state.portions}
          onChange={this.onChange}
          name="portions"
          id="portions"
        />
        {this.state.showInfo ? (
          <ul className="list-group">
            <li className="list-group-item" key={description}>
              Beskrivning: {description}
            </li>
            <li className="list-group-item" key={imageURL}>
              <img
                src={imageURL}
                style={{ width: 250, height: 250 }}
                className="mt-2"
                alt="Error"
              />
            </li>
            <li className="list-group-item" key={tags}>
              Taggar: <ol>{this.showtags()}</ol>
            </li>
            <li className="list-group-item">
              Instruktioner: <ol>{this.showInstructions()}</ol>
            </li>
            <li className="list-group-item">
              Ingredienser: <ol>{this.showIngredients()}</ol>
            </li>
            <li className="list-group-item">
              Näring: <ol>{this.showNutritionValues()}</ol>
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
