import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WordCardRoutingModule } from './word-card-routing.module';
import { WordCardComponent } from './word-card.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [WordCardComponent],
  imports: [
    CommonModule,
    WordCardRoutingModule,
    MatCardModule,
    MatButtonModule,
  ],
})
export class WordCardModule {}
