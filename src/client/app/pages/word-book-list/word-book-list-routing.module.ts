import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WordBookListComponent } from './word-book-list.component';

const routes: Routes = [
  {
    path: '',
    component: WordBookListComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WordBookListRoutingModule {}
