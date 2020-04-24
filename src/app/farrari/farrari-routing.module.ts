import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FarrariPage } from './farrari.page';

const routes: Routes = [
  {
    path: '',
    component: FarrariPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FarrariPageRoutingModule {}
