import { CREATE_RECIPE } from './types/types';
import axios from 'axios';

const createRecipe = recipe => {
  axios.post('http://localhost:8080/create', recipe);
  return {
    type: CREATE_RECIPE,
    payload: recipe
  };
};

export { createRecipe };

/*
const createTag = tag => {
  axios.post('http://localhost:8080/tags', tag);
  return {
    type: CREATE_TAG,
    payload: tag
  };
};

*/
