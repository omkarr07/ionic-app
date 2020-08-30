import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ServiceListPage } from './service-list.page';

const routes: Routes = [
  {
    path: '',
    component: ServiceListPage
  },
  {
    path: 'serviceinfo',
    loadChildren: () => import('./serviceinfo/serviceinfo.module').then( m => m.ServiceinfoPageModule)
  },
  {
    path: 'addservice',
    loadChildren: () => import('./addservice/addservice.module').then( m => m.AddservicePageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ServiceListPageRoutingModule {}
