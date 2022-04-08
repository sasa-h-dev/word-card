import { IWordCard } from '../../../../../interface/word-card.interface';

export const featureName = 'wordCard';

export type StateType = 'wordCardList' | 'wordCardDeail';

export interface State {
  wordCardList: IWordCard[] | null;
  wordCardDeail: IWordCard | null;
}
export const initState: State = {
  wordCardList: null,
  wordCardDeail: null,
};
