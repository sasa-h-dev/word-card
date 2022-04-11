import { createAction, props } from '@ngrx/store';
import { IWordBook } from '../../../../../interface/word-book.interface';
import { StateType } from './word-book.state';

export const fetchWordBookList = createAction(
  '[fetchWordBookList]',
  props<{ wordBookList: IWordBook[] }>()
);

export const setActiveWordBookList = createAction(
  '[setActiveWordBookList]',
  props<{ activeWordBookList: IWordBook[] }>()
);

export const fetchWordBookDetail = createAction(
  '[fetchWordBookDetail]',
  props<{ wordBookDetail: IWordBook }>()
);

export const clearState = createAction(
  '[clearState]',
  props<{ stateNames: StateType[] }>()
);
