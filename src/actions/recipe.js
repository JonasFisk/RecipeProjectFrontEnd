import { CREATE_RECIPE, GET_RECIPES } from './types/types';
import axios from 'axios';

const createRecipe = recipe => {
  axios.post('http://localhost:8080/create', recipe);
  return {
    type: CREATE_RECIPE,
    payload: recipe
  };
};

const getRecipes = () => async (dispatch, getState) => {
  const result = await axios.get('http://localhost:8080/recipe');
  console.log(result.data);
  dispatch({
    type: GET_RECIPES,
    payload: result.data.recipes
  });
};

export { createRecipe, getRecipes };

/*
const createTag = tag => {
  axios.post('http://localhost:8080/tags', tag);
  return {
    type: CREATE_TAG,
    payload: tag
  };
};

const getTags = () => async (dispatch, getState) => {
  const result = await axios.get('http://localhost:8080/tags');
  console.log(result.data.tags);
  dispatch({
    type: GET_TAGS,
    payload: result.data.tags
  });
};

*/
