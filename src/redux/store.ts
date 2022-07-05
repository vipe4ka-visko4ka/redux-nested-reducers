import {combineReducers, createStore } from 'redux';

import * as reducers from './reducers';

const rootReducer = combineReducers(reducers);
export const store = createStore(rootReducer);

export type RootState = ReturnType<typeof rootReducer>;

