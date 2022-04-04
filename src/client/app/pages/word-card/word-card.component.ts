import { first } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { IWordCard } from '../../../../interface/word-card.interface';
import { WordCardService } from '../../domains/word-card/word-card.service';

@Component({
  selector: 'app-word-card',
  templateUrl: './word-card.component.html',
  styleUrls: ['./word-card.component.scss'],
})
export class WordCardComponent implements OnInit {
  wordCards: IWordCard[] = [];
  currentItem!: IWordCard;

  longText = '';
  answerArr: string[] = [];

  constructor(private wordCardService: WordCardService) {}

  ngOnInit(): void {
    // get all
    this.wordCardService
      .getWordCards()
      .pipe(first())
      .subscribe((wordCards) => {
        // set all
        this.wordCards = wordCards;
        // set random item
        this.randomItem(this.wordCards);
      });
  }

  // 答案
  async showAnswer() {
    const answer = this.currentItem.japanese || '';
    this.answerArr = answer.split(';');
  }

  // 下一题
  async showNext() {
    this.answerArr = [];
    this.randomItem(this.wordCards);
  }

  // 同类型题
  async showSameType() {
    this.answerArr = [];
    this.randomItem(
      this.wordCards.filter(
        (item) =>
          item.no !== this.currentItem.no && item.type === this.currentItem.type
      )
    );
  }

  // 随机出题
  randomItem(items: IWordCard[]): void {
    this.currentItem = items[(Math.random() * items.length) | 0];
    this.longText = this.currentItem.chinese || '';
  }
}
