import { Action, createReducer, on } from '@ngrx/store';
import { State, initState } from './word-card.state';
import * as Actions from './word-card.action';

const customReducer = createReducer(
  initState,
  on(Actions.fetchWordCardList, (state, { wordCardList }) => ({
    ...state,
    wordCardList,
  })),

  on(Actions.setActiveWordCardList, (state, { activeWordCardList }) => ({
    ...state,
    activeWordCardList,
  })),

  on(Actions.fetchWordCardDetail, (state, { wordCardDetail }) => ({
    ...state,
    wordCardDetail,
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
  return customReducer(state, action);
}
