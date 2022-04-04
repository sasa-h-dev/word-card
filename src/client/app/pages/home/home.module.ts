import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    RouterModule,
    CommonModule,
    HomeRoutingModule,
    MatCardModule,
    MatButtonModule,
    MatGridListModule,
  ],
})
export class HomeModule {}
