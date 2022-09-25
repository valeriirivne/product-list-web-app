import { legacy_createStore as createStore, applyMiddleware } from 'redux';

import { rootReducer } from './root-reducer';

import logger from 'redux-logger';

const middleWares = [logger];

// created root-reducer as common reducer  which joins together all my future reducers
export const store = createStore(rootReducer, applyMiddleware(...middleWares));
