import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import * as RouteConfig from 'route-config';

class NavBarTab {
  link: string[];
  name: string;
}
@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit, OnDestroy {
  navs: NavBarTab[] = [];
  sub: any;

  constructor(private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.sub = this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd && window.location.search === "")
        window.history.replaceState({}, null, window.location.pathname + "?");
    });
    RouteConfig.Routes.forEach((val) => {
      this.navs.push({
        link: ['/user', val.name],
        name: val.prettyName
      })
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
