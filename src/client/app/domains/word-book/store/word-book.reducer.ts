import { Action, createReducer, on } from '@ngrx/store';
import { State, initState } from './word-book.state';
import * as Actions from './word-book.action';

const customReducer = createReducer(
  initState,
  on(Actions.fetchWordBookList, (state, { wordBookList }) => ({
    ...state,
    wordBookList,
  })),

  on(Actions.setActiveWordBookList, (state, { activeWordBookList }) => ({
    ...state,
    activeWordBookList,
  })),

  on(Actions.fetchWordBookDeail, (state, { wordBookDeail }) => ({
    ...state,
    wordBookDeail,
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
