import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WordBookComponent } from './word-book.component';

const routes: Routes = [
  {
    path: '',
    component: WordBookComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WordBookRoutingModule {}
