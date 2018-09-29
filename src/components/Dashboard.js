import React, { Component } from 'react';
import { getRecipes } from '../actions/recipe';
import { connect } from 'react-redux';
import Recipe from './Recipe';

class Dashboard extends Component {
  async componentDidMount() {
    await this.props.getRecipes();
    console.log(this.props.recipes);
  }

  render() {
    const { recipes } = this.props;
    return (
      <div>
        <ul>
          {recipes.map(recipe => (
            <Recipe key={recipe._id} recipe={recipe} />
          ))}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  recipes: state.recipes.recipes
});

export default connect(
  mapStateToProps,
  { getRecipes }
)(Dashboard);
