import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

class Tab {
  name: string;
  link: string[];
}

@Component({
  selector: 'app-route-navigation',
  templateUrl: './route-navigation.component.html',
  styleUrls: ['./route-navigation.component.css']
})
export class RouteNavigationComponent implements OnInit, OnDestroy {
  private sub: any;
  public route_id: any;
  public tabs: Tab[];
  constructor(public route: ActivatedRoute) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.route_id = params.route_id;
      this.tabs = [
        { name: 'User', link: ['/user', this.route_id] },
        { name: 'Upload', link: ['/user', this.route_id, 'upload' ] }
      ]
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
