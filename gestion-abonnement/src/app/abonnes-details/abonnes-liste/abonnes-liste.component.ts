import { Component, OnInit } from '@angular/core';
import { Abonne  } from './../../shared/abonne.model';
import { CategorieDetailService } from './../../shared/categorie-detail.service';



@Component({
  selector: 'app-abonnes-liste',
  templateUrl: './abonnes-liste.component.html',
  styles: [
  ]
})
export class AbonnesListeComponent implements OnInit {

  constructor(public service : CategorieDetailService ) {

   }

   ngOnInit(): void {
    this.service.refreshList()

  }
  refrech() {
    
    return this.service.refreshList();
  }


}
