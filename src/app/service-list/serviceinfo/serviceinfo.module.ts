import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ServiceinfoPageRoutingModule } from './serviceinfo-routing.module';

import { ServiceinfoPage } from './serviceinfo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ServiceinfoPageRoutingModule
  ],
  declarations: [ServiceinfoPage]
})
export class ServiceinfoPageModule {}
