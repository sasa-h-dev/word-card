import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WordCardComponent } from './word-card.component';

const routes: Routes = [
  {
    path: '',
    component: WordCardComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WordCardRoutingModule {}
