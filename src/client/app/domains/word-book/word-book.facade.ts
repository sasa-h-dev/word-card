import { Injectable } from '@angular/core';
import { Store, select } from '@ngrx/store';
import * as Actions from './store/word-book.action';
import * as Selectors from './store/word-book.selector';
import { Observable, tap, first } from 'rxjs';
import { State, StateType } from './store/word-book.state';
import { WordBookApiService } from './word-book.api.service';
import { WordBookStoreModule } from './store/word-book.store.module';
import { IWordBook } from '../../../../interface/word-book.interface';

@Injectable({ providedIn: WordBookStoreModule })
export class WorkBookFacate {
  readonly wordBookList$ = this.store.pipe(select(Selectors.wordBookList));
  readonly activeWordBookList$ = this.store.pipe(
    select(Selectors.activeWordBookList)
  );
  readonly wordBookDetail$ = this.store.pipe(select(Selectors.wordBookDetail));

  constructor(private store: Store<State>, private api: WordBookApiService) {}

  // 初期获取所有
  public fetchWordBookList(): void {
    this.api
      .fetchWordBookList()
      .pipe(first())
      .subscribe((wordBookList) => {
        return this.store.dispatch(Actions.fetchWordBookList({ wordBookList }));
      });
  }

  /**active word card */
  public setActiveWordBookList(activeWordBookList: IWordBook[]): void {
    this.store.dispatch(Actions.setActiveWordBookList({ activeWordBookList }));
  }

  public fetchWordBookDetail(wordBookId: string): void {
    this.api
      .fetchWordBookDetail(wordBookId)
      .pipe(first())
      .subscribe((wordBookDetail) => {
        this.store.dispatch(Actions.fetchWordBookDetail({ wordBookDetail }));
      });
  }

  /** 清除状态 所有*/
  async clearMyBlogStates(): Promise<void> {
    this.store.dispatch(
      Actions.clearState({
        stateNames: ['wordBookList', 'wordBookDetail'],
      })
    );
  }
}
