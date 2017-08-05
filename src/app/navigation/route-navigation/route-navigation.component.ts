import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-route-navigation',
  templateUrl: './route-navigation.component.html',
  styleUrls: ['./route-navigation.component.css']
})
export class RouteNavigationComponent implements OnInit, OnDestroy {
  private sub: any;
  public route_id: any;
  constructor(public route: ActivatedRoute) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.route_id = params.route_id;
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
