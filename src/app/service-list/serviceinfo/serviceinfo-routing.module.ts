import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ServiceinfoPage } from './serviceinfo.page';

const routes: Routes = [
  {
    path: '',
    component: ServiceinfoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ServiceinfoPageRoutingModule {}
