import _ from 'lodash';

const showRecipes = (recipes, { name, description, tags }) => {
  return recipes.filter(recipe => {
    const recipeMatch = recipe.name.toLowerCase().includes(name.toLowerCase());
    const descriptionMatch = recipe.description
      .toLowerCase()
      .includes(description.toLowerCase());

    if (tags.length > 0) {
      const tagMatches = tags.some(tag => recipe.tags.includes(tag));
      return recipeMatch && descriptionMatch && tagMatches;
    } else {
      return recipeMatch && descriptionMatch;
    }
  });
};

export default showRecipes;
