import {
  Column,
  Entity,
  OneToMany,
  ManyToOne,
  JoinColumn,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { WordCard } from './word-card.entity';

@Entity('word-book')
export class WordBook {
  @PrimaryGeneratedColumn({ type: 'integer', name: 'id' })
  id: number;

  @Column('integer', {
    name: 'WordBookParrentId',
    nullable: true,
  })
  wordBookParrentId: string;

  /**标题 */
  @Column('character varying', {
    name: 'Title',
    nullable: true,
  })
  title: string;

  /**分类 */
  @Column('character varying', {
    name: 'Type',
    nullable: true,
  })
  type: string;

  /**排序 */
  @Column('integer', {
    name: 'Order',
    nullable: true,
  })
  order: number;

  /**描述 */
  @Column('character varying', {
    name: 'Description',
    nullable: true,
  })
  description: string;

  @OneToMany(() => WordCard, (wordCard) => wordCard.wordBook)
  readonly wordCardList?: WordCard[];

  @OneToMany(() => WordBook, (wordBook) => wordBook.wordBook)
  readonly wordBookList?: WordBook[];

  @ManyToOne(() => WordBook, (wordBook) => wordBook.wordBookList)
  @JoinColumn({ name: 'WordBookParrentId', referencedColumnName: 'id' })
  readonly wordBook?: WordBook;
}
