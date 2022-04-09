import { Action, createReducer, on } from '@ngrx/store';
import { State, initState } from './word-card.state';
import * as Actions from './word-card.action';

const blogReducer = createReducer(
  initState,
  on(Actions.fetchWordCardList, (state, { wordCardList }) => ({
    ...state,
    wordCardList,
  })),

  on(Actions.setActiveWordCardList, (state, { activeWordCardList }) => ({
    ...state,
    activeWordCardList,
  })),

  on(Actions.fetchWordCardDeail, (state, { wordCardDeail }) => ({
    ...state,
    wordCardDeail,
  })),

  on(Actions.clearState, (state, { stateNames }) => {
    const clearTargetState = stateNames.reduce(
      (acc, current) => ({ ...acc, [current]: null }),
      {}
    );
    return {
      ...state,
      ...clearTargetState,
    };
  })
);

export function reducer(state: State, action: Action) {
  return blogReducer(state, action);
}
