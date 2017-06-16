import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ViewImageComponent } from 'app/images/view-image/view-image.component';
import { StandardComponent } from 'app/images/standard/standard.component';
import * as RouteConfig from 'route-config';



let routes: Routes = [
  { path: '', redirectTo: '/boomers', pathMatch: 'full' },
  { path: 'view-image', component: ViewImageComponent }
]

RouteConfig.Routes.forEach((val) => (
  routes.push({
    path: val.name,
    component: StandardComponent,
    data: {
      apiR: val.apiR,
      staticR: val.staticR
    }
  })
));

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
