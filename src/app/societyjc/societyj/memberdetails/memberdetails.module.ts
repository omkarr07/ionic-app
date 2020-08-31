import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MemberdetailsPageRoutingModule } from './memberdetails-routing.module';

import { MemberdetailsPage } from './memberdetails.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    MemberdetailsPageRoutingModule
  ],
  declarations: [MemberdetailsPage]
})
export class MemberdetailsPageModule {}
