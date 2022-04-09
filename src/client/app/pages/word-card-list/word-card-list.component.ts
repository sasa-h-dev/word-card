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

  get activeWordCardList(): IWordCard[] {
    if (this.wordCards) {
      return this.wordCards.filter((item) => item.isChecked);
    } else {
      return [];
    }
  }

  get allChecked(): boolean {
    if (this.wordCards) {
      return this.wordCards.length === this.activeWordCardList.length;
    } else {
      return false;
    }
  }

  isShownAnswer = true;

  startNum: number = 0;
  endNum: number = 0;

  constructor(private workCardFacate: WorkCardFacate, private router: Router) {}

  ngOnInit(): void {
    // get all
    this.workCardFacate.fetchWordCardList();

    this.wordCardList$.subscribe((wordCards) => {
      // set all
      if (wordCards) {
        this.wordCards = wordCards;
        this.startNum = 1;
        this.endNum = wordCards.length;
      }
    });
  }

  // 显示答案
  async showAnswer() {
    this.isShownAnswer = !this.isShownAnswer;
  }

  // 答题卡画面
  navigateTo(path: string) {
    if (this.wordCards) {
      this.workCardFacate.setActiveWordCardList(
        this.activeWordCardList.length > 0
          ? this.activeWordCardList
          : this.wordCards
      );
    }
    this.router.navigate([path]);
  }

  // 单条选择
  checkItemChanged(checked: boolean, wordCard: IWordCard) {
    this.wordCards?.forEach((item) => {
      if (item.id === wordCard.id) item.isChecked = checked;
    });

    // this.setSomeChecked();
  }

  // 部分选择
  setSomeChecked(): boolean {
    if (this.wordCards == null) return false;

    return this.activeWordCardList.length > 0 && !this.allChecked;
  }

  // 全部选择
  setAllChecked(isChecked: boolean) {
    // this.allChecked = isChecked;
    if (this.wordCards == null) {
      return;
    }
    this.wordCards = this.wordCards.map((wordCard) => ({
      ...wordCard,
      isChecked: isChecked,
    }));
  }

  // 指定开始结束 开始测试题卡
  checkItemChangedWithStartEnd(isChecked: boolean) {
    try {
      if (this.wordCards == null) {
        return;
      }
      this.wordCards = this.wordCards.map((wordCard, index: number) => {
        return {
          ...wordCard,
          isChecked:
            this.startNum - 1 <= index && index <= this.endNum - 1
              ? isChecked
              : false,
        };
      });
      this.setSomeChecked();
    } catch (e) {
      console.log('指定开始结束 开始测试题 Error:', e);
    }
  }
}
