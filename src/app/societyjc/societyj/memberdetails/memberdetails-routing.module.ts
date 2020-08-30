import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MemberdetailsPage } from './memberdetails.page';

const routes: Routes = [
  {
    path: '',
    component: MemberdetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MemberdetailsPageRoutingModule {}
