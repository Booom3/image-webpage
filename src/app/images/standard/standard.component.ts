import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { Image } from 'app/classes/image';
import { ImageRoute } from 'app/classes/imageroute';

import { StandardService } from './standard.service';

@Component({
  selector: 'app-standard',
  templateUrl: './standard.component.html',
  styleUrls: ['./standard.component.css']
})
export class StandardComponent implements OnInit, OnDestroy {
  data: ImageRoute;
  public sub;
  public URL: string;
  constructor(
    private route: ActivatedRoute,
    private http: Http,
    public standardService: StandardService
  ) { }

  navigateForwards(): void {
    if (this.standardService.activeIndex >= (this.standardService.images.length - 1)) {
      this.getImages();
      return;
    }
    this.standardService.activeIndex++;
    this.setImages();
  }

  navigateBackwards(): void {
    if (this.standardService.activeIndex <= 0) {
      return;
    }
    this.standardService.activeIndex--;
    this.setImages();
  }
  
  setImages(): void {
    this.standardService.activeImages = this.standardService.images[this.standardService.activeIndex];
  }

  getImages(): void {
    this.getImagesApi(this.URL).then(images => {
      this.standardService.images.push(images);
      this.standardService.activeIndex = this.standardService.images.length - 1;
      this.setImages();
    });
  }

  getImagesApi(url: string): Promise<Image[]> {
    return this.http.get(url)
      .toPromise()
      .then(response => response.json().data as Image[])
      .catch(() => this.getImagesDebug());
  }

  private getImagesDebug(): Image[] {
    console.log('Getting images from debug');
    var images: string[] = [
        "1.png",
        "2.png",
        "3.png"
      ];
      var ret: Image[] = [];
      for (let i = 0; i < 4; i++) {
        images.forEach(image => {
          ret.push({
            id: image,
            fullpath: '/assets/images/' + image,
            type: 'image'
          });
        });
        ret.push({
          id: "123.webm",
          fullpath: '/assets/images/123.webm',
          type: 'video'
        });
      }
      return ret;
  }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.URL = '/api/' + params.route_id;
      if (this.standardService.images.length === 0) {
        this.getImages();
        this.standardService.previousRoute = params.route_id;
        return;
      }

      if (this.standardService.previousRoute !== params.route_id) {
        this.getImages();
      }
      
      this.standardService.previousRoute = params.route_id;      
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
