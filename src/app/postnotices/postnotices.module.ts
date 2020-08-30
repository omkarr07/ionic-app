import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PostnoticesPageRoutingModule } from './postnotices-routing.module';

import { PostnoticesPage } from './postnotices.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PostnoticesPageRoutingModule
  ],
  declarations: [PostnoticesPage]
})
export class PostnoticesPageModule {}
