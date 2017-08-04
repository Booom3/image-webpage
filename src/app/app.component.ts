import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
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

  constructor(private router: Router) {}

  ngOnInit() {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd && window.location.search === "")
        window.history.replaceState({}, null, window.location.pathname + "?");
    });
    RouteConfig.Routes.forEach((val) => {
      this.navs.push({
        link: 'user/' + val.name,
        name: val.prettyName
      })
    });
  }
}
