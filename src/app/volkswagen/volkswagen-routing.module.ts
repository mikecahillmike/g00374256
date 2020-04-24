import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VolkswagenPage } from './volkswagen.page';

const routes: Routes = [
  {
    path: '',
    component: VolkswagenPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VolkswagenPageRoutingModule {}
