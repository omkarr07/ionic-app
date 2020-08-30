import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SocietyjcPageRoutingModule } from './societyjc-routing.module';

import { SocietyjcPage } from './societyjc.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SocietyjcPageRoutingModule
  ],
  declarations: [SocietyjcPage]
})
export class SocietyjcPageModule {}
