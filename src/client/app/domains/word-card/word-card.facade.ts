import { Injectable } from '@angular/core';
import { Store, select } from '@ngrx/store';
import * as Actions from './store/word-card.action';
import * as Selectors from './store/word-card.selector';
import { Observable, tap, first } from 'rxjs';
import { State, StateType } from './store/word-card.state';
import { WordCardApiService } from './word-card.api.service';
import { WordCardStoreModule } from './store/word-card.store.module';
import { IWordCard } from '../../../../interface/word-card.interface';

@Injectable({ providedIn: WordCardStoreModule })
export class WorkCardFacate {
  readonly wordCardList$ = this.store.pipe(select(Selectors.wordCardList));
  readonly activeWordCardList$ = this.store.pipe(
    select(Selectors.activeWordCardList)
  );
  readonly wordCardDeail$ = this.store.pipe(select(Selectors.wordCardDeail));

  constructor(private store: Store<State>, private api: WordCardApiService) {}

  public fetchWordCardList(): void {
    this.api
      .fetchWordCardList()
      .pipe(first())
      .subscribe((wordCardList) => {
        return this.store.dispatch(Actions.fetchWordCardList({ wordCardList }));
      });
  }

  /**active word card */
  public setActiveWordCardList(activeWordCardList: IWordCard[]): void {
    this.store.dispatch(Actions.setActiveWordCardList({ activeWordCardList }));
  }

  // todo
  public fetchWordCardDetail(): void {
    this.api.fetchWordCardList().pipe(
      tap((wordCardList) => {
        this.store.dispatch(Actions.fetchWordCardList({ wordCardList }));
      })
    );
  }

  /** 清除状态 所有*/
  async clearMyBlogStates(): Promise<void> {
    this.store.dispatch(
      Actions.clearState({
        stateNames: ['wordCardList', 'wordCardDeail'],
      })
    );
  }
}
