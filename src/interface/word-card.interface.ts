export interface IWordCard {
  id?: number;
  title?: string;
  sameCategory?: string;
  meaning?: string;
  foreign?: string;
  conjunction?: string;
  example?: string;
  similar?: string;
  antonym?: string;
  property?: string;
  label?: string;
  Others?: string;
  Order?: number;

  isChecked?: boolean;
  foreignArr?: string[];
}
