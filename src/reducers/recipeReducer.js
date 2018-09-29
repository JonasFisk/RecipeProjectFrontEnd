import { CREATE_RECIPE, GET_RECIPES } from '../actions/types/types';

const initialState = {
  recipes: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case CREATE_RECIPE:
      return {
        ...state,
        recipes: [action.payload, ...state.recipes]
      };
    case GET_RECIPES:
      return {
        ...state,
        recipes: action.payload
      };
    default:
      return state;
  }
};
