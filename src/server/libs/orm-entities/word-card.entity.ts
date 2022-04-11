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

  @Column('character varying', {
    name: 'Title',
    nullable: true,
  })
  title: string;

  @Column('character varying', {
    name: 'SameCategory',
    nullable: true,
  })
  sameCategory: string;

  @Column('character varying', {
    name: 'Meaning',
    nullable: true,
  })
  meaning: string;

  @Column('character varying', {
    name: 'Foreign',
    nullable: true,
  })
  foreign: string;

  @Column('character varying', {
    name: 'Conjunction',
    nullable: true,
  })
  conjunction: string;

  @Column('character varying', {
    name: 'Example',
    nullable: true,
  })
  example: string;

  @Column('character varying', {
    name: 'Similar',
    nullable: true,
  })
  similar: string;

  @Column('character varying', {
    name: 'Antonym',
    nullable: true,
  })
  antonym: string;

  @Column('character varying', {
    name: 'Property',
    nullable: true,
  })
  property: string;

  @Column('character varying', {
    name: 'Label',
    nullable: true,
  })
  label: string;

  @Column('character varying', {
    name: 'Others',
    nullable: true,
  })
  others: string;

  @Column('integer', {
    name: 'Order',
    nullable: true,
  })
  order: number;

  @Column('integer', {
    name: 'WordBookParrentId',
    nullable: true,
  })
  wordBookParrentId: string;

  @ManyToOne(() => WordBook, (wordBook) => wordBook.wordCardList)
  @JoinColumn({ name: 'WordBookParrentId', referencedColumnName: 'id' })
  readonly wordBook?: WordBook;
}
