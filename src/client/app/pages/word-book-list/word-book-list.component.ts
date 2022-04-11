import { Router } from '@angular/router';
import { Component, OnInit, ViewChild } from '@angular/core';
import { IWordBook } from '../../../../interface/word-book.interface';
import { WorkCardFacate } from '../../domains/word-book/word-book.facade';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-word-book-list',
  templateUrl: './word-book-list.component.html',
  styleUrls: ['./word-book-list.component.scss'],
})
export class WordBookListComponent implements OnInit {
  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  @ViewChild(MatSort)
  sort!: MatSort;

  wordBookList$ = this.workCardFacate.wordBookList$;
  wordBooks: IWordBook[] = [];
  displayedColumns = ['no', 'title', 'open', 'delete'];

  dataSource!: MatTableDataSource<IWordBook>;
  constructor(private workCardFacate: WorkCardFacate, private router: Router) {}

  ngOnInit(): void {
    // get all
    this.workCardFacate.fetchWordBookList();

    this.wordBookList$.subscribe((wordBooks) => {
      // set all
      if (wordBooks) {
        this.wordBooks = wordBooks;
        this.dataSource = new MatTableDataSource(this.wordBooks);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      }
    });
  }

  navigateTo(path: string) {
    this.router.navigate([path]);
  }

  addData(): void {}
  deleteData(): void {}
}
