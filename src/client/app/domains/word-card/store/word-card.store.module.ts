import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { featureName } from './word-card.state';
import { reducer } from './word-card.reducer';
@NgModule({
  imports: [StoreModule.forFeature(featureName, reducer)],
})
export class WordCardStoreModule {}
