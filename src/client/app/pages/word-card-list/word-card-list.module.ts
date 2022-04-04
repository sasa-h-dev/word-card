import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { WordCardListRoutingModule } from './word-card-list-routing.module';
import { WordCardListComponent } from './word-card-list.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [WordCardListComponent],
  imports: [
    CommonModule,
    RouterModule,
    WordCardListRoutingModule,
    MatCardModule,
    MatButtonModule,
  ],
})
export class WordCardListModule {}
