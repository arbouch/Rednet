import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { Routes, RouterModule } from '@angular/router';
import { AbonnementsDetailsComponent } from './abonnements-details/abonnements-details.component';
import { AbonnesDetailsComponent } from './abonnes-details/abonnes-details.component';

const routes: Routes = [
  {
    path: '',
    component: AppComponent,
    children: [
    {path: 'abonne',
    component: AbonnesDetailsComponent
    },
    {path: 'abonnement',
    component: AbonnementsDetailsComponent
    },
    
    
    ]
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
