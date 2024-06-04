import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'secundaria',
    loadChildren: () => import('./secundaria/secundaria.module').then( m => m.SecundariaPageModule)
  },
  {
    path: 'terciaria',
    loadChildren: () => import('./terciaria/terciaria.module').then( m => m.TerciariaPageModule)
  },
  {
    path: 'quarta',
    loadChildren: () => import('./quarta/quarta.module').then( m => m.QuartaPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
