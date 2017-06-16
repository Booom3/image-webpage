import { Component, OnInit, Input } from '@angular/core';

import { Image } from 'app/classes/image';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {
  @Input()
  image: Image;
  constructor() { }

  ngOnInit() {
  }

}
