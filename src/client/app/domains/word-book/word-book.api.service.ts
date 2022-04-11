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
}
