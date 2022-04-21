import { Observable } from 'rxjs';
import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IWordBook } from '../../../../interface/word-book.interface';

@Injectable({ providedIn: 'root' })
export class WordBookApiService {
  constructor(
    private http: HttpClient,
    @Inject('API_URL') private apiUrl: string
  ) {}

  fetchWordBookList(): Observable<IWordBook[]> {
    const url = `${this.apiUrl}/words/word-book-list`;
    return this.http.post<IWordBook[]>(url, {});
  }

  fetchWordBookDetail(wordBookId: string): Observable<IWordBook> {
    const url = `${this.apiUrl}/words/word-book`;
    return this.http.post<IWordBook>(url, { wordBookId });
  }

  /**保存WordBook详细 */
  saveWordBookDetail(wordBook: IWordBook): Observable<IWordBook> {
    const url = `${this.apiUrl}/words/save-word-book`;
    console.log(
      'saveWordBookDetail(wordBook: IWordBook): Observable<IWordBook> {',
      wordBook
    );
    return this.http.post<IWordBook>(url, wordBook);
  }
}
