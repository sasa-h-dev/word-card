import { ActionReducer, ActionReducerMap, MetaReducer } from '@ngrx/store';
import { State } from '../states';

export const reducers: ActionReducerMap<State> = {};

export function logger(reducer: ActionReducer<State>): ActionReducer<State> {
  return (state, action) => {
    const result = reducer(state, action);
    console.groupCollapsed(action.type);
    console.log('action', action);
    console.log('state', state);
    console.groupEnd();
    return result;
  };
}

export const metaReducers: MetaReducer<State>[] = [logger];
