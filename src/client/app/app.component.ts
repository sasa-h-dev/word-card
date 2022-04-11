import { Component } from '@angular/core';
import { Router } from '@angular/router';

interface ILableLink {
  lable: string;
  link: string;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(private router: Router) {}
  menuList: ILableLink[] = [
    {
      lable: 'Home',
      link: '/',
    },
    {
      lable: '辞书列表',
      link: '/word-book-list',
    },
    {
      lable: '收藏夹',
      link: '/',
    },
  ];

  navigateTo(path: string) {
    this.router.navigate([path]);
  }
}
