import { Injectable } from '@angular/core';

import { Image } from 'app/classes/image';

@Injectable()
export class StandardService {
  public activeImages: Image[];
  public activeIndex: number = 0;
  public images: Image[][] = [];
  public previousRoute: string;
  constructor() { }

}
