import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { WordCardListRoutingModule } from './word-card-list-routing.module';
import { WordCardListComponent } from './word-card-list.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { WordCardStoreModule } from '../../domains/word-card/store/word-card.store.module';

@NgModule({
  declarations: [WordCardListComponent],
  imports: [
    CommonModule,
    RouterModule,
    WordCardListRoutingModule,
    WordCardStoreModule,
    MatCardModule,
    MatButtonModule,
  ],
})
export class WordCardListModule {}
