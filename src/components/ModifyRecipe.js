import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addIngredient } from '../actions/createRecipe';

class ModifySelectedIngredient extends Component {
  state = {
    units: '',
    measurement: 'g',
    inGrams: '',
    imageURL: '',
    error: '',
    name: ''
  };

  onChange = e => {
    if (e.target.name === 'inGrams' || e.target.name === 'units') {
      this.setState({ [e.target.name]: e.target.valueAsNumber });
    } else {
      this.setState({ [e.target.name]: e.target.value });
    }

    if (this.state.error) {
      this.setState({
        error: ''
      });
    }
  };
  submitIngredient = async e => {
    e.preventDefault();

    const { units, measurement, inGrams } = this.state;

    if (!units || !inGrams) {
      await this.setState({
        error: 'Please enter Units and Grams per unit'
      });
    }

    if (!this.state.error) {
      this.props.addIngredient(
        this.props.ingredient,
        units,
        measurement,
        inGrams
      );
      this.setState({
        units: '',
        inGrams: ''
      });
    }
  };

  render() {
    const { ingredient } = this.props;
    const { error } = this.state;

    return (
      <div>
        {ingredient &&
          ingredient.Namn && (
            <div>
              <div className="card card-body mb-3">
                {`Ingredient name: ${ingredient.Namn}`}
              </div>
              <form onSubmit={this.submitIngredient}>
                {error && <p className="alert alert-danger">{error}</p>}
                <div className="form-group">
                  <input
                    className="form-control"
                    type="number"
                    id="units"
                    placeholder="Enter Units"
                    onChange={this.onChange}
                    name="units"
                    value={this.state.units}
                  />
                </div>
                <div className="form-group">
                  <select
                    value={this.state.optionsState}
                    onChange={this.onChange}
                    name="measurement"
                    className="form-control"
                  >
                    <option value="g">g</option>
                    <option value="hg">hg</option>
                    <option value="ml">ml</option>
                    <option value="cl">cl</option>
                    <option value="dl">dl</option>
                    <option value="krm">krm</option>
                    <option value="tsk">tsk</option>
                    <option value="msk">msk</option>
                  </select>
                </div>
                <div className="form-group">
                  <input
                    className="form-control"
                    type="number"
                    id="inGrams"
                    placeholder="Unit equivalent in grams"
                    name="inGrams"
                    value={this.state.inGrams}
                    onChange={this.onChange}
                  />
                </div>
                <input type="submit" value="Add Ingredient" className="btn" />
              </form>
            </div>
          )}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  ingredient: state.createRecipe.selectedIngredient,
  ingredients: state.createRecipe.recipeIngredients
});

export default connect(
  mapStateToProps,
  { addIngredient }
)(ModifySelectedIngredient);
