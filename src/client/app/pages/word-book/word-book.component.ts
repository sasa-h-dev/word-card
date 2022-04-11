import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import {
  Component,
  OnInit,
  ViewChild,
  AfterViewChecked,
  ChangeDetectorRef,
} from '@angular/core';

import { MatTableDataSource } from '@angular/material/table';
import { IWordBook } from '../../../../interface/word-book.interface';
import { IWordCard } from '../../../../interface/word-card.interface';
import { WorkBookFacate } from '../../domains/word-book/word-book.facade';
import {
  FormControl,
  FormArray,
  FormGroup,
  FormBuilder,
  Validators,
} from '@angular/forms';
import { first } from 'rxjs';
import { MatTable } from '@angular/material/table';

@Component({
  selector: 'app-word-book',
  templateUrl: './word-book.component.html',
  styleUrls: ['./word-book.component.scss'],
})
export class WordBookComponent implements OnInit, AfterViewChecked {
  wordBookDetail$ = this.workBookFacate.wordBookDetail$;
  wordBookDetail!: IWordBook;

  displayedColumns = ['no', 'meaning', 'foreign', 'delete'];
  dataSource!: MatTableDataSource<IWordBook>;

  form!: FormGroup;
  get formControl(): FormArray {
    return this.form.get('formControl') as FormArray;
  }

  isNewModle = true;
  emptyWordCardRow = { id: undefined, meaning: '', foreign: '' } as IWordCard;
  @ViewChild(MatTable) table!: MatTable<IWordBook>;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private workBookFacate: WorkBookFacate,
    private readonly changeDetectorRef: ChangeDetectorRef
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

      // 新规模式
      if (this.isNewModle) {
        // 初期显示一行空;
        setTimeout(() => {
          this.form.setControl(
            'formControl',
            new FormArray(
              [this.emptyWordCardRow].map((wordCard) =>
                this.asFormGroup(wordCard)
              )
            )
          );
        }, 2000);
      }
      // 编辑模式
      else {
        this.wordBookDetail$.subscribe((wordBookDetail) => {
          if (wordBookDetail) {
            this.wordBookDetail = wordBookDetail;

            if (this.wordBookDetail.wordCardList) {
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
    });
  }
  ngAfterViewChecked(): void {
    this.changeDetectorRef.detectChanges();
  }
  public navigateTo(path: string) {
    this.router.navigate([path]);
  }

  public save(): void {}

  public delete(): void {}

  public addRow(): void {
    this.formControl.controls.push(this.asFormGroup(this.emptyWordCardRow));
    this.table.renderRows();
  }

  private asFormGroup(item: IWordCard): FormGroup {
    return new FormGroup({
      id: new FormControl(item.id),
      meaning: new FormControl(item.meaning, Validators.required),
      foreign: new FormControl(item.foreign, Validators.required),
    });
  }
}
