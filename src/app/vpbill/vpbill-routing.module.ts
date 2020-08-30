import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VpbillPage } from './vpbill.page';

const routes: Routes = [
  {
    path: '',
    component: VpbillPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VpbillPageRoutingModule {}
