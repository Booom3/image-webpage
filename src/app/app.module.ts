import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from 'app/app.component';
import { DisplayComponent } from 'app/images/display/display.component';

import { AppRoutingModule } from 'app/app-routing/app-routing.module';
import { ViewImageComponent } from './images/view-image/view-image.component';
import { StandardComponent } from './images/standard/standard.component';

@NgModule({
  declarations: [
    AppComponent,
    DisplayComponent,
    ViewImageComponent,
    StandardComponent
  ],
  imports: [
    NgbModule.forRoot(),    
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [ ],
  bootstrap: [AppComponent]
})
export class AppModule { }
