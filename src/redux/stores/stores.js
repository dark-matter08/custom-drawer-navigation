import {combineReducers, applyMiddleware} from 'redux';
import {thunkMiddleware} from 'redux-thunk';
import {composeWithDevTools} from '@redux-devtools/extension';
import {configureStore} from '@reduxjs/toolkit';

import tabReducer from '../reducers/tab.reducers';

const reducers = combineReducers({
  tab: tabReducer,
});

const store = configureStore(
  {reducer: reducers},
  composeWithDevTools(applyMiddleware(thunkMiddleware)),
);

export default store;
