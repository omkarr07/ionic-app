import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SocietyjcPage } from './societyjc.page';

const routes: Routes = [
  {
    path: '',
    component: SocietyjcPage
  },
  {
    path: 'societyc',
    loadChildren: () => import('./societyc/societyc.module').then( m => m.SocietycPageModule)
  },
  {
    path: 'societyj',
    loadChildren: () => import('./societyj/societyj.module').then( m => m.SocietyjPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SocietyjcPageRoutingModule {}
