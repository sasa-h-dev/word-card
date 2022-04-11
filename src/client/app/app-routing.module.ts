import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WordCardComponent } from './pages/word-card/word-card.component';
import { WordCardListComponent } from './pages/word-card-list/word-card-list.component';
import { WordBookListComponent } from './pages/word-book-list/word-book-list.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'word-card-list',
    component: WordCardListComponent,
  },
  {
    path: 'word-card-list/:wordBookId',
    component: WordCardListComponent,
  },
  {
    path: 'word-card',
    component: WordCardComponent,
    // loadChildren: () =>
    //   import('./pages/word-card/word-card.module').then(
    //     (m) => m.WordCardModule
    //   ),
  },
  {
    path: 'word-book-list',
    component: WordBookListComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
