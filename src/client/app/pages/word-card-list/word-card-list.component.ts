import { first } from 'rxjs';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { IWordCard } from '../../../../interface/word-card.interface';
import { WordCardService } from '../../domains/word-card/word-card.service';

@Component({
  selector: 'app-word-card-list',
  templateUrl: './word-card-list.component.html',
  styleUrls: ['./word-card-list.component.scss'],
})
export class WordCardListComponent implements OnInit {
  wordCards: IWordCard[] = [];
  isShownAnswer = true;
  constructor(
    private wordCardService: WordCardService,
    private router: Router
  ) {}

  ngOnInit(): void {
    // get all
    this.wordCardService
      .getWordCards()
      .pipe(first())
      .subscribe((wordCards) => {
        // set all
        this.wordCards = wordCards;
        // set random item
        // this.randomItem(this.wordCards);
      });
  }

  // 答案
  async showAnswer() {
    this.isShownAnswer = !this.isShownAnswer;
    // const answer = this.currentItem.japanese || '';
    // this.answerArr = answer.split(';');
  }

  navigateTo(path: string) {
    this.router.navigate([path]);
  }
}
