import { IWordBook } from '../../../../../interface/word-book.interface';

export const featureName = 'wordBook';

export type StateType = 'wordBookList' | 'wordBookDeail';

export interface State {
  wordBookList: IWordBook[] | null;
  activeWordBookList: IWordBook[] | null;
  wordBookDeail: IWordBook | null;
}
export const initState: State = {
  wordBookList: null,
  activeWordBookList: null,
  wordBookDeail: null,
};
