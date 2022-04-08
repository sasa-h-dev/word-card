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

  fetchWordCardList(): Observable<IWordCard[]> {
    const url = `${this.apiUrl}/words/`;
    return this.http.get<IWordCard[]>(url);
    // return this.http.get<IWordCard[]>('http://localhost:3000/api/words/');
  }
}
