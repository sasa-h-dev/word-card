import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
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
import { WordBookListComponent } from './word-book-list.component';
import { WordBookListRoutingModule } from './word-book-list-routing.module';
import { WordBookStoreModule } from '../../domains/word-book/store/word-book.store.module';

@NgModule({
  declarations: [WordBookListComponent],
  imports: [
    FormsModule,
    CommonModule,
    RouterModule,
    WordBookListRoutingModule,
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
export class WordBookListModule {}
