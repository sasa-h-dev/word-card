import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { WordCardRoutingModule } from './word-card-routing.module';
import { WordCardComponent } from './word-card.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { WordCardStoreModule } from '../../domains/word-card/store/word-card.store.module';

@NgModule({
  declarations: [WordCardComponent],
  imports: [
    CommonModule,
    RouterModule,
    WordCardStoreModule,
    WordCardRoutingModule,
    MatCardModule,
    MatButtonModule,
  ],
})
export class WordCardModule {}
