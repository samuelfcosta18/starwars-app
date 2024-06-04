//angular principals
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
//ionic base
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
//routing modules
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import {TerciariaPageModule} from "./terciaria/terciaria.module";
//firebase
import {environment} from "../environments/environment"
import {provideFirebaseApp, initializeApp} from "@angular/fire/app";
import {getFirestore, provideFirestore} from "@angular/fire/firestore";


@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, IonicModule.forRoot({innerHTMLTemplatesEnabled:true}), AppRoutingModule, TerciariaPageModule, HttpClientModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    //@ts-ignore
        provideFirebaseApp(() => initializeApp(environment.firebase)),
    //@ts-ignore
        provideFirestore(() => getFirestore())
    ],
  bootstrap: [AppComponent]
})
export class AppModule {

}
