import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GeneratemainPageRoutingModule } from './generatemain-routing.module';

import { GeneratemainPage } from './generatemain.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GeneratemainPageRoutingModule
  ],
  declarations: [GeneratemainPage]
})
export class GeneratemainPageModule {}
