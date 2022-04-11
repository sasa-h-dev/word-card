import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { featureName } from './word-book.state';
import { reducer } from './word-book.reducer';
@NgModule({
  imports: [StoreModule.forFeature(featureName, reducer)],
})
export class WordBookStoreModule {}
