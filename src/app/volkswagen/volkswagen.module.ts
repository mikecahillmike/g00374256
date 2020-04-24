import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VolkswagenPageRoutingModule } from './volkswagen-routing.module';

import { VolkswagenPage } from './volkswagen.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VolkswagenPageRoutingModule
  ],
  declarations: [VolkswagenPage]
})
export class VolkswagenPageModule {}
