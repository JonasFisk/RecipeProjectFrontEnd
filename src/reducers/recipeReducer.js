import { CREATE_RECIPE } from '../actions/types/types';

const initialState = [];

export default (state = initialState, action) => {
  switch (action.type) {
    case CREATE_RECIPE:
      return [...state, action.payload];

    default:
      return state;
  }
};
