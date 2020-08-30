import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SocietycPage } from './societyc.page';

const routes: Routes = [
  {
    path: '',
    component: SocietycPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SocietycPageRoutingModule {}
