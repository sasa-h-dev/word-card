import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(private router: Router) {}

  menuList: string[] = ['Home', '单词本', 'Loafers', 'Moccasins', 'Sneakers'];

  navigateTo(path: string) {
    this.router.navigate([path]);
  }
}
