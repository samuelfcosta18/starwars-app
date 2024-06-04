import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TerciariaPageRoutingModule } from './terciaria-routing.module';

import { TerciariaPage } from './terciaria.page';
import {ComponentsModule} from "../component/component.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    TerciariaPageRoutingModule
  ],
  declarations: [TerciariaPage]
})
export class TerciariaPageModule {}
