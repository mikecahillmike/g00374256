import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MercedesPage } from './mercedes.page';

const routes: Routes = [
  {
    path: '',
    component: MercedesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MercedesPageRoutingModule {}
