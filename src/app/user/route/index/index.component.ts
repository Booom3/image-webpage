import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import * as RouteConfig from 'route-config';

import { IndexService } from './index.service';

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
  subRoute: any;

  constructor(private router: Router, private activatedRoute: ActivatedRoute, public indexService: IndexService) { }

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
    this.subRoute = this.activatedRoute.params.subscribe(params => {
      this.indexService.route_id = params.route_id;
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
    this.subRoute.unsubscribe();
  }

}
