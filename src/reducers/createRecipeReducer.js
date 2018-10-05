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
} from '../actions/types/types';

const initialState = {
  ingredients: [],
  recipeIngredients: [],
  selectedIngredient: {},
  name: '',
  imageURL: '',
  tags: [],
  allTags: [],
  description: '',
  instructions: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_INGREDIENTS:
      return {
        ...state,
        ingredients: action.payload
      };
    case SET_INGREDIENT:
      return {
        ...state,
        selectedIngredient: action.payload
      };
    case ADD_INGREDIENT: {
      let index = state.recipeIngredients.findIndex(
        ingredient =>
          ingredient.ingredient.Namn === action.payload.ingredient.Namn
      );
      console.log(index);
      if (index === -1) {
        return {
          ...state,
          recipeIngredients: [action.payload, ...state.recipeIngredients]
        };
      } else {
        return state;
      }
    }
    case ADD_IMAGEURL:
      return {
        ...state,
        imageURL: action.payload
      };
    case ADD_NAME:
      return {
        ...state,
        name: action.payload
      };
    case REMOVE_INGREDIENT:
      return {
        ...state,
        recipeIngredients: state.recipeIngredients.filter(
          ingredient => ingredient !== action.payload
        )
      };
    case SET_TAGS:
      return {
        ...state,
        tags: action.payload
      };
    case GET_TAGS:
      return {
        ...state,
        allTags: action.payload
      };
    case CREATE_TAG:
      return {
        ...state,
        allTags: [...state.allTags, action.payload]
      };
    case ADD_DESCRIPTION:
      return {
        ...state,
        description: action.payload
      };
    case ADD_INSTRUCTIONS:
      return {
        ...state,
        instructions: action.payload
      };
    case RESET_RECIPE: {
      return {
        ...state,
        ingredients: [],
        recipeIngredients: [],
        selectedIngredient: {},
        name: '',
        imageURL: '',
        tags: [],
        allTags: [],
        description: '',
        instructions: []
      };
    }

    case RESET_SELECTED: {
      return {
        ...state,
        selectedIngredient: {}
      };
    }
    default:
      return state;
  }
};
