import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import CreateRecipeReducer from '../reducers/createRecipeReducer';
import RecipeReducer from '../reducers/recipeReducer';
import AuthenticationReducer from '../reducers/authReducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
  const store = createStore(
    combineReducers({
      createRecipe: CreateRecipeReducer,
      recipes: RecipeReducer,
      authenticated: AuthenticationReducer
    }),
    composeEnhancers(applyMiddleware(thunk))
  );
  return store;
};
