import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { WebComponent } from './web/web.component';
import { WebapiComponent } from './webapi/webapi.component'; // Import the WebApi component

const routes: Routes = [
  { path: '', component: LayoutComponent, children: [
    { path: 'web', component: WebComponent },
    { path: 'webapi', component: WebapiComponent },
    // Add other child routes here
  ]},
  // Add other routes here
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }