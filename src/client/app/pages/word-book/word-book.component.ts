import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Component, OnInit, ViewChild } from '@angular/core';

import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { IWordBook } from '../../../../interface/word-book.interface';
import { IWordCard } from '../../../../interface/word-card.interface';
import { WorkBookFacate } from '../../domains/word-book/word-book.facade';
import { FormControl, FormArray, FormGroup, FormBuilder } from '@angular/forms';
import { first } from 'rxjs';

@Component({
  selector: 'app-word-book',
  templateUrl: './word-book.component.html',
  styleUrls: ['./word-book.component.scss'],
})
export class WordBookComponent implements OnInit {
  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  @ViewChild(MatSort)
  sort!: MatSort;

  wordBookDetail$ = this.workBookFacate.wordBookDetail$;
  wordBookDetail!: IWordBook;

  displayedColumns = ['no', 'meaning', 'foreign', 'delete'];

  dataSource!: MatTableDataSource<IWordBook>;

  form!: FormGroup;
  get formControl(): FormArray {
    return this.form.get('formControl') as FormArray;
  }

  isNewModle = true;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private workBookFacate: WorkBookFacate
  ) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      formControl: this.formBuilder.array([]),
    });

    this.activatedRoute.paramMap.pipe(first()).subscribe((params: ParamMap) => {
      const wordBookId = params.get('wordBookId');
      if (wordBookId) {
        this.isNewModle = false;
        this.workBookFacate.fetchWordBookDetail(wordBookId as string);
      }
    });

    this.wordBookDetail$.subscribe((wordBookDetail) => {
      if (wordBookDetail) {
        this.wordBookDetail = wordBookDetail;

        if (this.wordBookDetail.wordCardList) {
          this.dataSource = new MatTableDataSource(
            this.wordBookDetail.wordCardList
          );
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;

          this.form.setControl(
            'formControl',
            new FormArray(
              this.wordBookDetail.wordCardList.map((wordCard) =>
                this.asFormGroup(wordCard)
              )
            )
          );
        }
      }
    });
  }

  public navigateTo(path: string) {
    this.router.navigate([path]);
  }

  public save(): void {}
  public delete(): void {}

  private asFormGroup(item: IWordCard): FormGroup {
    return new FormGroup({
      id: new FormControl(item.id),
      meaning: new FormControl(item.meaning),
      foreign: new FormControl(item.foreign),
    });
  }
}
