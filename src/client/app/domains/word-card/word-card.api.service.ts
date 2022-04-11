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
}
