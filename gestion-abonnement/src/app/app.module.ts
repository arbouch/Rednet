import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AbonnesDetailsComponent } from './abonnes-details/abonnes-details.component';
import { AjoutAbonneComponent } from './abonnes-details/ajout-abonne/ajout-abonne.component';
import { AbonnesListeComponent } from './abonnes-details/abonnes-liste/abonnes-liste.component';
import { AbonnementsDetailsComponent } from './abonnements-details/abonnements-details.component';
import { AjoutAbonnementComponent } from './abonnements-details/ajout-abonnement/ajout-abonnement.component';
import { AbonnementListeComponent } from './abonnements-details/abonnement-liste/abonnement-liste.component';
import { CommonModule } from '@angular/common';
import { FormsModule }   from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    AbonnesDetailsComponent,
    AjoutAbonneComponent,
    AbonnesListeComponent,
    AbonnementsDetailsComponent,
    AjoutAbonnementComponent,
    AbonnementListeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    FormsModule   ,
    HttpClientModule   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
