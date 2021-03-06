import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { WordCardListComponent } from './word-card-list.component';
import { WordCardListRoutingModule } from './word-card-list-routing.module';
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
