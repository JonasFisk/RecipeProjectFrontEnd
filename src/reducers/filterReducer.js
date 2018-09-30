import {
  SET_TAG_FILTER,
  SET_NAME_FILTER,
  SET_DESCRIPTION_FILTER
} from '../actions/types/types';

const initialState = {
  name: '',
  description: '',
  tags: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_NAME_FILTER:
      return {
        ...state,
        name: action.payload
      };
    case SET_DESCRIPTION_FILTER:
      return {
        ...state,
        description: action.payload
      };
    case SET_TAG_FILTER:
      return {
        ...state,
        tags: action.payload
      };
    default:
      return state;
  }
};
