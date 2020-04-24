import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'car',
    loadChildren: () => import('./car/car.module').then( m => m.CarPageModule)
  },
  {
    path: 'volkswagen',
    loadChildren: () => import('./volkswagen/volkswagen.module').then( m => m.VolkswagenPageModule)
  },
  {
    path: 'bmw',
    loadChildren: () => import('./bmw/bmw.module').then( m => m.BmwPageModule)
  },
  {
    path: 'mercedes',
    loadChildren: () => import('./mercedes/mercedes.module').then( m => m.MercedesPageModule)
  },
  {
    path: 'farrari',
    loadChildren: () => import('./farrari/farrari.module').then( m => m.FarrariPageModule)
  },
  {
    path: 'details',
    loadChildren: () => import('./details/details.module').then( m => m.DetailsPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
