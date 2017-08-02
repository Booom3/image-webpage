import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ViewImageComponent } from 'app/images/view-image/view-image.component';
import { StandardComponent } from 'app/images/standard/standard.component';
import { UploadComponent } from 'app/upload/upload.component';

import * as RouteConfig from 'route-config';



let routes: Routes = [
  { path: '', redirectTo: '/user/boomers', pathMatch: 'full' },
  { path: 'view-image', component: ViewImageComponent },
  { path: 'user/:route_id', component: StandardComponent },
  { path: 'upload/:route_id', component: UploadComponent }
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
