import { LOGIN, LOGOUT, FAILED_LOGIN } from '../actions/types/types';

const initialState = {
  authenticated: ''
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        authenticated: action.payload
      };
    case LOGOUT:
      return {
        ...state,
        authenticated: action.payload
      };
    case FAILED_LOGIN:
      return {
        ...state,
        authenticated: action.payload
      };
    default:
      return state;
  }
};
