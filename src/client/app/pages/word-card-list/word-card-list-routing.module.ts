import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WordCardListComponent } from './word-card-list.component';

const routes: Routes = [
  {
    path: '',
    component: WordCardListComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WordCardListRoutingModule {}
