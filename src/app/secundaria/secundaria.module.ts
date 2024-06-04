import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SecundariaPageRoutingModule } from './secundaria-routing.module';

import { SecundariaPage } from './secundaria.page';
import {ComponentsModule} from "../component/component.module";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        ComponentsModule,
        SecundariaPageRoutingModule,
        IonicModule
    ],
  declarations: [SecundariaPage]
})
export class SecundariaPageModule {}
