import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TerciariaPage } from './terciaria.page';

const routes: Routes = [
  {
    path: '',
    component: TerciariaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TerciariaPageRoutingModule {}
