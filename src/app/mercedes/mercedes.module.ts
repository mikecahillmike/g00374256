import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MercedesPageRoutingModule } from './mercedes-routing.module';

import { MercedesPage } from './mercedes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MercedesPageRoutingModule
  ],
  declarations: [MercedesPage]
})
export class MercedesPageModule {}
