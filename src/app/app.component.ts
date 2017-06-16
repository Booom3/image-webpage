import { Component, OnInit } from '@angular/core';
import * as RouteConfig from 'route-config';

class NavBarTab {
  link: string;
  name: string;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app works!';
  navs: NavBarTab[] = [];

  constructor() {}

  ngOnInit() {
    RouteConfig.Routes.forEach((val) => {
      this.navs.push({
        link: '/' + val.name,
        name: val.prettyName
      })
    });
  }
}
