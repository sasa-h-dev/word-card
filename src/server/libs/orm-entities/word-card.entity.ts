import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { WordBook } from './word-book.entity';

@Entity('word-card')
export class WordCard {
  @PrimaryGeneratedColumn({ type: 'integer', name: 'id' })
  id: number;

  /**单词、语法 */
  @Column('character varying', {
    name: 'Word',
    nullable: true,
  })
  word: string;

  /**读音*/
  @Column('character varying', {
    name: 'Pronunciation',
    nullable: true,
  })
  pronunciation: string;

  /**声调 0 1，2，3，4，5*/
  @Column('character varying', {
    name: 'Tone',
    nullable: true,
  })
  tone: string;

  /**语义 */
  @Column('character varying', {
    name: 'Meaning',
    nullable: true,
  })
  meaning: string;

  /**分类: N1 N2*/
  @Column('character varying', {
    name: 'Category',
    nullable: true,
  })
  category: string;

  /**属性: 感動詞 名字 动词 */
  @Column('character varying', {
    name: 'Property',
    nullable: true,
  })
  property: string;

  /**接续 */
  @Column('character varying', {
    name: 'Conjunction',
    nullable: true,
  })
  conjunction: string;

  /**例句 */
  @Column('character varying', {
    name: 'Example',
    nullable: true,
  })
  example: string;

  /**同义词 */
  @Column('character varying', {
    name: 'Similar',
    nullable: true,
  })
  similar: string;

  /**反义词 */
  @Column('character varying', {
    name: 'Antonym',
    nullable: true,
  })
  antonym: string;

  /**标签: xx */
  @Column('character varying', {
    name: 'Label',
    nullable: true,
  })
  label: string;

  /**其他 */
  @Column('character varying', {
    name: 'Others',
    nullable: true,
  })
  others: string;

  /**排序 */
  @Column('integer', {
    name: 'Order',
    nullable: true,
  })
  order: number;

  /**属于哪本词书 */
  @Column('integer', {
    name: 'WordBookParrentId',
    nullable: true,
  })
  wordBookParrentId: string;

  @ManyToOne(() => WordBook, (wordBook) => wordBook.wordCardList)
  @JoinColumn({ name: 'WordBookParrentId', referencedColumnName: 'id' })
  readonly wordBook?: WordBook;
}
