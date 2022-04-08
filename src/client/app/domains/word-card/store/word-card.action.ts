import { createAction, props } from '@ngrx/store';
import { IWordCard } from '../../../../../interface/word-card.interface';
import { StateType } from './word-card.state';

export const fetchWordCardList = createAction(
  '[wordCardList]',
  props<{ wordCardList: IWordCard[] }>()
);

export const fetchWordCardDeail = createAction(
  '[wordCardDeail]',
  props<{ wordCardDeail: IWordCard }>()
);

export const clearState = createAction(
  '[clearState]',
  props<{ stateNames: StateType[] }>()
);
