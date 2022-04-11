import { IWordBook } from '../../../../../interface/word-book.interface';

export const featureName = 'wordBook';

export type StateType = 'wordBookList' | 'wordBookDetail';

export interface State {
  wordBookList: IWordBook[] | null;
  activeWordBookList: IWordBook[] | null;
  wordBookDetail: IWordBook | null;
}
export const initState: State = {
  wordBookList: null,
  activeWordBookList: null,
  wordBookDetail: null,
};
