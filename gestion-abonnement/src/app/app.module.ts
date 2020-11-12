import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AbonnesDetailsComponent } from './abonnes-details/abonnes-details.component';
import { AjoutAbonneComponent } from './abonnes-details/ajout-abonne/ajout-abonne.component';

@NgModule({
  declarations: [
    AppComponent,
    AbonnesDetailsComponent,
    AjoutAbonneComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
