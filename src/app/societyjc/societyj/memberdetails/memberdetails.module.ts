import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MemberdetailsPageRoutingModule } from './memberdetails-routing.module';

import { MemberdetailsPage } from './memberdetails.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MemberdetailsPageRoutingModule
  ],
  declarations: [MemberdetailsPage]
})
export class MemberdetailsPageModule {}
