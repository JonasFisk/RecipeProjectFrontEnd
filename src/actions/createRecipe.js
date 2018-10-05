import axios from 'axios';
import {
  GET_INGREDIENTS,
  SET_INGREDIENT,
  ADD_INGREDIENT,
  REMOVE_INGREDIENT,
  ADD_NAME,
  ADD_IMAGEURL,
  SET_TAGS,
  GET_TAGS,
  CREATE_TAG,
  ADD_DESCRIPTION,
  ADD_INSTRUCTIONS,
  RESET_RECIPE,
  RESET_SELECTED
} from './types/types';

const getIngredients = search => async (dispatch, getState) => {
  const response = await axios.get(
    `http://localhost:8080/ingredients/${search}`
  );
  dispatch({
    type: GET_INGREDIENTS,
    payload: response.data.ingredients
  });
};

const setIngredient = search => async (dispatch, getState) => {
  const response = await axios.get(
    'http://localhost:8080/ingredient/' + encodeURIComponent(search)
  );
  dispatch({
    type: SET_INGREDIENT,
    payload: response.data.ingredients[0]
  });
};

const removeIngredient = ingredient => {
  return {
    type: REMOVE_INGREDIENT,
    payload: ingredient
  };
};

const addName = name => {
  return {
    type: ADD_NAME,
    payload: name
  };
};

const addImageUrl = imageUrl => {
  return {
    type: ADD_IMAGEURL,
    payload: imageUrl
  };
};

const addIngredient = (
  ingredient,
  units,
  meassurement,
  inGrams,
  imageURL,
  name
) => {
  const newIngredient = {
    ingredient,
    units,
    meassurement,
    inGrams,
    imageURL,
    name
  };

  return {
    type: ADD_INGREDIENT,
    payload: newIngredient
  };
};

const setTags = tags => {
  return {
    type: SET_TAGS,
    payload: tags
  };
};

const getTags = () => async (dispatch, getState) => {
  const result = await axios.get('http://localhost:8080/tags');
  dispatch({
    type: GET_TAGS,
    payload: result.data.tags
  });
};

const createTag = tag => {
  axios.post('http://localhost:8080/tags', tag);
  return {
    type: CREATE_TAG,
    payload: tag
  };
};

const addDescription = description => {
  return {
    type: ADD_DESCRIPTION,
    payload: description
  };
};

const addInstructions = instructions => {
  return {
    type: ADD_INSTRUCTIONS,
    payload: instructions
  };
};

const resetSelected = () => {
  return {
    type: RESET_SELECTED
  };
};

const resetRecipe = () => {
  return {
    type: RESET_RECIPE
  };
};

export {
  getIngredients,
  setIngredient,
  addIngredient,
  removeIngredient,
  addName,
  addImageUrl,
  setTags,
  getTags,
  createTag,
  addDescription,
  addInstructions,
  resetRecipe,
  resetSelected
};
