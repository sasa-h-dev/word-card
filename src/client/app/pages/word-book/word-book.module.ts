import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatIconModule } from '@angular/material/icon';
import { WordBookComponent } from './word-book.component';
import { WordBookRoutingModule } from './word-book-routing.module';
import { WordBookStoreModule } from '../../domains/word-book/store/word-book.store.module';

@NgModule({
  declarations: [WordBookComponent],
  imports: [
    ReactiveFormsModule,
    CommonModule,
    RouterModule,
    WordBookRoutingModule,
    WordBookStoreModule,
    MatIconModule,
    MatTableModule,
    MatPaginatorModule,
    MatCardModule,
    MatButtonModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatInputModule,
  ],
})
export class WordBookModule {}
