import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { WordCardModule } from './pages/word-card/word-card.module';
import { WordCardListModule } from './pages/word-card-list/word-card-list.module';
import { WordBookListModule } from './pages/word-book-list/word-book-list.module';
import { HomeModule } from './pages/home/home.module';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { AppStoreModule } from './shared/store/app-store.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    RouterModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AppStoreModule,
    HomeModule,
    WordCardModule,
    WordCardListModule,
    WordBookListModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
  ],
  providers: [
    {
      provide: 'API_URL',
      useValue: '/api',
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
