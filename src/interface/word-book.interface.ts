import { IWordCard } from './word-card.interface';
export interface IWordBook {
  id?: number;
  title?: string;
  type?: string;
  wordBookParrentId?: string;
  order?: string;
  description?: string;
  wordCardList?: IWordCard[];
  wordBookList?: [];
}
