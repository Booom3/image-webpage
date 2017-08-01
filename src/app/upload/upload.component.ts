import { Component, OnInit } from '@angular/core';
import { FileUploader } from 'ng2-file-upload';

const URL = '/upload/users';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit {

  public uploader:FileUploader = new FileUploader({url: URL});
  public hasBaseDropZoneOver:boolean = false;
 
  public fileOverBase(e:any):void {
    this.hasBaseDropZoneOver = e;
  }

  constructor() { }

  ngOnInit() {
  }

}
