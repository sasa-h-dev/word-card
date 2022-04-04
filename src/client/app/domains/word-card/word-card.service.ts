import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IWordCard } from '../../../../interface/word-card.interface';

@Injectable({
  providedIn: 'root',
})
export class WordCardService {
  constructor(private http: HttpClient) {}

  getWordCards(): Observable<IWordCard[]> {
    return this.http.get<IWordCard[]>('http://localhost:3000/api/words/');
  }
}
