import React, { Component } from 'react';
import { getRecipes } from '../actions/recipe';
import { connect } from 'react-redux';
import Recipe from './Recipe';
import Filters from './Filters';
import showRecipes from '../selectors/recipes';

class Dashboard extends Component {
  async componentDidMount() {
    await this.props.getRecipes();
  }

  render() {
    const { recipes } = this.props;
    return (
      <div>
        <Filters />
        <div>
          <ul>
            {recipes.map(recipe => (
              <Recipe key={recipe._id} recipe={recipe} />
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  recipes: showRecipes(state.recipes.recipes, state.filters)
});

export default connect(
  mapStateToProps,
  { getRecipes }
)(Dashboard);
