import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SocietyjPageRoutingModule } from './societyj-routing.module';

import { SocietyjPage } from './societyj.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SocietyjPageRoutingModule
  ],
  declarations: [SocietyjPage]
})
export class SocietyjPageModule {}
