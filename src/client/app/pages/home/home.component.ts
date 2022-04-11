import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { WorkBookFacate } from '../../domains/word-book/word-book.facade';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  wordBookList$ = this.workBookFacate.wordBookList$;

  constructor(private workBookFacate: WorkBookFacate, private router: Router) {}

  ngOnInit(): void {
    this.workBookFacate.fetchWordBookList();
  }

  navigateTo(path: string) {
    this.router.navigate([path]);
  }
}
