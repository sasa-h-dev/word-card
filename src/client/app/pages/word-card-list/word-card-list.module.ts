import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { WordCardListRoutingModule } from './word-card-list-routing.module';
import { WordCardListComponent } from './word-card-list.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { WordCardStoreModule } from '../../domains/word-card/store/word-card.store.module';

@NgModule({
  declarations: [WordCardListComponent],
  imports: [
    FormsModule,
    CommonModule,
    RouterModule,
    WordCardListRoutingModule,
    WordCardStoreModule,
    MatCardModule,
    MatButtonModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatInputModule,
  ],
})
export class WordCardListModule {}
