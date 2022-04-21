import { Observable } from 'rxjs';
import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IWordCard } from '../../../../interface/word-card.interface';

@Injectable({ providedIn: 'root' })
export class WordCardApiService {
  constructor(
    private http: HttpClient,
    @Inject('API_URL') private apiUrl: string
  ) {}

  fetchWordCardList(wordBookId: string): Observable<IWordCard[]> {
    const url = `${this.apiUrl}/words/word-card-list`;
    return this.http.post<IWordCard[]>(url, { wordBookId });
  }

  /**保存WordBook详细 */
  saveWordCards(wordCards: IWordCard[]): Observable<IWordCard[]> {
    const url = `${this.apiUrl}/words/save-word-cards`;
    console.log(
      'saveWordBookDetail(wordBook: IWordCard): Observable<IWordCard> {',
      wordCards
    );
    return this.http.post<IWordCard[]>(url, wordCards);
  }
}
