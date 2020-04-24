import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BmwPageRoutingModule } from './bmw-routing.module';

import { BmwPage } from './bmw.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BmwPageRoutingModule
  ],
  declarations: [BmwPage]
})
export class BmwPageModule {}
