import { createFeatureSelector, createSelector } from '@ngrx/store';
import { State, featureName } from './word-card.state';

const getState = createFeatureSelector<State>(featureName);
export const wordCardList = createSelector(
  getState,
  (state) => state.wordCardList
);
export const wordCardDeail = createSelector(
  getState,
  (state) => state.wordCardDeail
);
