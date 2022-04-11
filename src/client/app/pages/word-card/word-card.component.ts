import { first } from 'rxjs';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { IWordCard } from '../../../../interface/word-card.interface';
import { WorkCardFacate } from '../../domains/word-card/word-card.facade';

@Component({
  selector: 'app-word-card',
  templateUrl: './word-card.component.html',
  styleUrls: ['./word-card.component.scss'],
})
export class WordCardComponent implements OnInit {
  activeWordCardList$ = this.workCardFacate.activeWordCardList$;
  wordCards: IWordCard[] = [];
  currentItem!: IWordCard;

  longText = '';
  answerArr: string[] = [];

  constructor(private workCardFacate: WorkCardFacate, private router: Router) {}

  ngOnInit(): void {
    // get all
    this.activeWordCardList$.subscribe((wordCards) => {
      if (wordCards) {
        // set all
        this.wordCards = wordCards;
        // set random item
        if (this.wordCards) this.randomItem(this.wordCards);
      }
    });
  }

  // 答案
  async showAnswer() {
    const answer = this.currentItem.foreign || '';
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
          item.id !== this.currentItem.id &&
          item.sameCategory === this.currentItem.sameCategory
      )
    );
  }

  // 随机出题
  randomItem(items: IWordCard[]): void {
    this.currentItem = items[(Math.random() * items.length) | 0];
    this.longText = this.currentItem.meaning || '';
  }

  // 所有题目
  navigateTo(path: string) {
    this.router.navigate([path]);
  }
}
