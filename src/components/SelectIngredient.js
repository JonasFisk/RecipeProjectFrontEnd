import React, { Component } from 'react';
import { connect } from 'react-redux';
import Select from 'react-select';
import { getIngredients, setIngredient } from '../actions/createRecipe';

class SelectIngredient extends Component {
  state = {
    selectedOption: {},
    search: '',
    options: []
  };
  onInputChange = async e => {
    await this.setState({
      search: e
    });
    if (this.state.search.length === 2) {
      await this.props.getIngredients(this.state.search);

      const lables = this.props.ingredients.map(ingredient => {
        return {
          value: ingredient.Namn,
          label: ingredient.Namn
        };
      });
      this.setState({
        options: lables
      });
    }
    if (this.state.search.length <= 1) {
      this.setState({
        options: []
      });
    }
  };
  onChange = async selectedOption => {
    await this.setState({
      selectedOption
    });
    this.props.setIngredient(this.state.selectedOption.value);
  };

  render() {
    const { selectedOption, options, search } = this.state;

    return (
      <div className="mt-2">
        <div>
          <Select
            value={selectedOption}
            inputValue={search}
            options={options}
            onChange={this.onChange}
            onInputChange={this.onInputChange}
            placeholder={'Search for an ingredient'}
          />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  ingredients: state.createRecipe.ingredients
});

export default connect(
  mapStateToProps,
  { getIngredients, setIngredient }
)(SelectIngredient);
