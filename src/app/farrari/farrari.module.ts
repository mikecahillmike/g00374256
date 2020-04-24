import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FarrariPageRoutingModule } from './farrari-routing.module';

import { FarrariPage } from './farrari.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FarrariPageRoutingModule
  ],
  declarations: [FarrariPage]
})
export class FarrariPageModule {}
