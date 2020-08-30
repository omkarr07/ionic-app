import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PostnoticesPage } from './postnotices.page';

const routes: Routes = [
  {
    path: '',
    component: PostnoticesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PostnoticesPageRoutingModule {}
