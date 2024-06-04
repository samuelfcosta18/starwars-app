import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { QuartaPageRoutingModule } from './quarta-routing.module';

import { QuartaPage } from './quarta.page';
import {ComponentsModule} from "../component/component.module";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        ComponentsModule,
        QuartaPageRoutingModule,
        IonicModule
    ],
  declarations: [QuartaPage]
})
export class QuartaPageModule {}
