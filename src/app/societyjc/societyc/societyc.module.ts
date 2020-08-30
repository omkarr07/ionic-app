import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SocietycPageRoutingModule } from './societyc-routing.module';

import { SocietycPage } from './societyc.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SocietycPageRoutingModule
  ],
  declarations: [SocietycPage]
})
export class SocietycPageModule {}
