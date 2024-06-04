import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SecundariaPage } from './secundaria.page';

const routes: Routes = [
  {
    path: '',
    component: SecundariaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SecundariaPageRoutingModule {}
