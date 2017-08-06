import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import * as RouteIndexService from 'app/user/route/index/index.service';

@Component({
  selector: 'app-view-image',
  templateUrl: './view-image.component.html',
  styleUrls: ['./view-image.component.css']
})
export class ViewImageComponent implements OnInit, OnDestroy {

  image_path: string;
  image_type: string;
  private sub: any;
  public route_id: string;
  constructor(private route: ActivatedRoute, public routeIndexService: RouteIndexService.IndexService) { }

  ngOnInit() {
    this.sub = this.route.queryParams.subscribe(params => {
      this.image_path = params['path'];
      this.image_type = params['type'];
    });
    this.route_id = this.routeIndexService.route_id;
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
