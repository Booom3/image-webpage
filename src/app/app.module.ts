import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FileUploader, FileUploadModule } from 'ng2-file-upload';

import { AppComponent } from 'app/app.component';
import { DisplayComponent } from 'app/images/display/display.component';

import { AppRoutingModule } from 'app/app-routing/app-routing.module';
import { ViewImageComponent } from './images/view-image/view-image.component';
import { StandardComponent } from './images/standard/standard.component';
import { UploadComponent } from './upload/upload.component';

@NgModule({
  declarations: [
    AppComponent,
    DisplayComponent,
    ViewImageComponent,
    StandardComponent,
    UploadComponent
  ],
  imports: [
    NgbModule.forRoot(),    
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    FileUploadModule
  ],
  providers: [ ],
  bootstrap: [AppComponent]
})
export class AppModule { }
