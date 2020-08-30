import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GeneratemainPage } from './generatemain.page';

const routes: Routes = [
  {
    path: '',
    component: GeneratemainPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GeneratemainPageRoutingModule {}
