import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-image',
  templateUrl: './view-image.component.html',
  styleUrls: ['./view-image.component.css']
})
export class ViewImageComponent implements OnInit, OnDestroy {

  image_path: string;
  image_type: string;
  private sub: any;
  private subRoute: any;
  public route_id: string;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.sub = this.route.queryParams.subscribe(params => {
      this.image_path = params['path'];
      this.image_type = params['type'];
    });
    this.subRoute = this.route.params.subscribe(params => {
      this.route_id = params.route_id;
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
    this.subRoute.unsubscribe();
  }

}
