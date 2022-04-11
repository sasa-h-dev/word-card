import { createFeatureSelector, createSelector } from '@ngrx/store';
import { State, featureName } from './word-book.state';

const getState = createFeatureSelector<State>(featureName);
export const wordBookList = createSelector(
  getState,
  (state) => state.wordBookList
);
export const activeWordBookList = createSelector(
  getState,
  (state) => state.activeWordBookList
);

export const wordBookDeail = createSelector(
  getState,
  (state) => state.wordBookDeail
);
