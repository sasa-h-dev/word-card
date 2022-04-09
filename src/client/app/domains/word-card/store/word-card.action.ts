import { createAction, props } from '@ngrx/store';
import { IWordCard } from '../../../../../interface/word-card.interface';
import { StateType } from './word-card.state';

export const fetchWordCardList = createAction(
  '[fetchWordCardList]',
  props<{ wordCardList: IWordCard[] }>()
);

export const setActiveWordCardList = createAction(
  '[setActiveWordCardList]',
  props<{ activeWordCardList: IWordCard[] }>()
);

export const fetchWordCardDeail = createAction(
  '[fetchWordCardDeail]',
  props<{ wordCardDeail: IWordCard }>()
);

export const clearState = createAction(
  '[clearState]',
  props<{ stateNames: StateType[] }>()
);
