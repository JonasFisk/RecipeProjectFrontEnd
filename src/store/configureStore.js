import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import CreateRecipeReducer from '../reducers/createRecipeReducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
  const store = createStore(
    combineReducers({
      createRecipe: CreateRecipeReducer
    }),
    composeEnhancers(applyMiddleware(thunk))
  );
  return store;
};
