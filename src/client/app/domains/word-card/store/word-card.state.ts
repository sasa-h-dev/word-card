import { IWordCard } from '../../../../../interface/word-card.interface';

export const featureName = 'wordCard';

export type StateType = 'wordCardList' | 'wordCardDetail';

export interface State {
  wordCardList: IWordCard[] | null;
  activeWordCardList: IWordCard[] | null;
  wordCardDetail: IWordCard | null;
}
export const initState: State = {
  wordCardList: null,
  activeWordCardList: null,
  wordCardDetail: null,
};
