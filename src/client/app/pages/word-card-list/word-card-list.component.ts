import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { IWordCard } from '../../../../interface/word-card.interface';
import { WorkCardFacate } from '../../domains/word-card/word-card.facade';

@Component({
  selector: 'app-word-card-list',
  templateUrl: './word-card-list.component.html',
  styleUrls: ['./word-card-list.component.scss'],
})
export class WordCardListComponent implements OnInit {
  wordCardList$ = this.workCardFacate.wordCardList$;
  wordCards: IWordCard[] | null = [];
  isShownAnswer = true;
  constructor(private workCardFacate: WorkCardFacate, private router: Router) {}

  ngOnInit(): void {
    // get all
    this.workCardFacate.fetchWordCardList();

    this.wordCardList$.subscribe((wordCards) => {
      // set all
      this.wordCards = wordCards;
    });
  }

  // 答案
  async showAnswer() {
    this.isShownAnswer = !this.isShownAnswer;
  }

  navigateTo(path: string) {
    this.router.navigate([path]);
  }
}
