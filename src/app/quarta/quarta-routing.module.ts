import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { QuartaPage } from './quarta.page';

const routes: Routes = [
  {
    path: '',
    component: QuartaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class QuartaPageRoutingModule {}
