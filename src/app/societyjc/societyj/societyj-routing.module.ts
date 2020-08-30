import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SocietyjPage } from './societyj.page';

const routes: Routes = [
  {
    path: '',
    component: SocietyjPage
  },
  {
    path: 'memberdetails',
    loadChildren: () => import('./memberdetails/memberdetails.module').then( m => m.MemberdetailsPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SocietyjPageRoutingModule {}
