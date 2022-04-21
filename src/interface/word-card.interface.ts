export interface IWordCard {
  id?: number;
  category?: string;
  meaning?: string;
  word?: string;
  conjunction?: string;
  example?: string;
  similar?: string;
  antonym?: string;
  property?: string;
  label?: string;
  others?: string;
  order?: number;
  pronunciation?: string;
  tone?: string;

  /**是否被选中 用于单词卡 */
  isChecked?: boolean;
  wordArr?: string[];
}

// export type IWordCardEntity = Pick<IWordCard, 'id'>;
