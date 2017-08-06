import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import * as UserRouteIndexComponent from 'app/user/route/index/index.component';
import { ViewImageComponent } from 'app/images/view-image/view-image.component';
import { StandardComponent } from 'app/images/standard/standard.component';
import { UploadComponent } from 'app/upload/upload.component';

import * as RouteConfig from 'route-config';



let routes: Routes = [
  { path: '', redirectTo: '/user/boomers', pathMatch: 'full' },
  { path: 'user/:route_id', component: UserRouteIndexComponent.IndexComponent, children: [
    { path: '', component: StandardComponent },    
    { path: 'view', component: ViewImageComponent },
    { path: 'upload', component: UploadComponent }
  ]}
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
