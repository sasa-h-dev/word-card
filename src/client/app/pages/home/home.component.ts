import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { WorkCardFacate } from '../../domains/word-book/word-book.facade';
import { IWordBook } from '../../../../interface/word-book.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  wordBookList$ = this.workCardFacate.wordBookList$;

  constructor(private workCardFacate: WorkCardFacate, private router: Router) {}

  ngOnInit(): void {
    this.workCardFacate.fetchWordBookList();
  }

  navigateTo(path: string) {
    this.router.navigate([path]);
  }
}
