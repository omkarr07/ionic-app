import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VpbillPageRoutingModule } from './vpbill-routing.module';

import { VpbillPage } from './vpbill.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VpbillPageRoutingModule
  ],
  declarations: [VpbillPage]
})
export class VpbillPageModule {}
