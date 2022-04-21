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
import { WorkCardFacate } from '../../domains/word-card/word-card.facade';
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

  displayedColumns = ['no', 'meaning', 'word', 'delete'];
  dataSource!: MatTableDataSource<IWordBook>;

  cardListForm!: FormGroup;
  get formControl(): FormArray {
    return this.cardListForm.get('formControl') as FormArray;
  }

  // 空行
  emptyWordCardRow = { id: undefined, meaning: '', word: '' } as IWordCard;
  @ViewChild(MatTable) table!: MatTable<IWordBook>;

  // 新创建模式
  isCreateModle = true;
  // card list正在编辑模式
  isCardEditting = false;

  bookDescriptionControl = new FormControl('', Validators.required);
  bookForm = new FormGroup({
    bookTitleControl: new FormControl('', [
      Validators.required,
      Validators.maxLength(255),
    ]),
    bookDescriptionControl: new FormControl('', Validators.maxLength(3000)),
  });

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private workBookFacate: WorkBookFacate,
    private workCardFacate: WorkCardFacate,
    private readonly changeDetectorRef: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.cardListForm = this.formBuilder.group({
      formControl: this.formBuilder.array([]),
    });

    this.activatedRoute.paramMap.pipe(first()).subscribe((params: ParamMap) => {
      const wordBookId = params.get('wordBookId');
      if (wordBookId) {
        this.isCreateModle = false;
        this.workBookFacate.fetchWordBookDetail(wordBookId as string);
      }

      // 新规模式
      if (this.isCreateModle) {
        // 初期显示一行空;
        // setTimeout(() => {
        //   this.cardListForm.setControl(
        //     'formControl',
        //     new FormArray(
        //       [this.emptyWordCardRow].map((wordCard) =>
        //         this.asFormGroup(wordCard)
        //       )
        //     )
        //   );
        // }, 2000);
      }
      // 编辑模式
      else {
        this.wordBookDetail$.subscribe((wordBookDetail) => {
          if (wordBookDetail) {
            this.wordBookDetail = wordBookDetail;

            if (this.wordBookDetail.wordCardList) {
              this.cardListForm.setControl(
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

  public saveCard(): void {
    this.wordBookDetail$.subscribe((wordBook) => {
      if (wordBook) {
        let toSaveWordCardList: IWordCard[] = [];
        console.log('this.wordBookDetail.id;', wordBook.id);
        this.formControl.controls.map((item) => {
          toSaveWordCardList.push({
            ...item.value,
            wordBookParrentId: wordBook.id,
          });
        });
        console.log('toSaveWordCardList', toSaveWordCardList);
        this.workCardFacate.saveWordCards(toSaveWordCardList);
      }
    });
  }

  public saveBook(): void {
    if (this.bookForm.valid) {
      console.log(
        'bookTitleControl',
        this.bookForm.controls['bookTitleControl'].value
      );
      console.log(
        'bookDescriptionControl',
        this.bookForm.controls['bookDescriptionControl'].value
      );

      this.workBookFacate.saveWordBookDetail({
        id: this.wordBookDetail ? this.wordBookDetail.id : undefined,
        title: this.bookForm.controls['bookTitleControl'].value,
        description: this.bookForm.controls['bookDescriptionControl'].value,
      });
    }
  }

  public delete(): void {}

  public addRow(): void {
    this.formControl.controls.push(this.asFormGroup(this.emptyWordCardRow));
    this.table.renderRows();
  }

  public editRow(): void {
    this.isCardEditting = true;
    this.table.renderRows();
  }

  private asFormGroup(item: IWordCard): FormGroup {
    return new FormGroup({
      id: new FormControl(item.id),
      meaning: new FormControl(item.meaning, Validators.required),
      word: new FormControl(item.word, Validators.required),
    });
  }
}
