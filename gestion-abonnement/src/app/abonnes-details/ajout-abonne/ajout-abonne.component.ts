import { Component, OnInit } from '@angular/core';
import { Abonne  } from './../../shared/abonne.model';
import { AbonneService } from './../../shared/abonne.service';

import { FormsModule, NgForm }   from '@angular/forms';

@Component({
  selector: 'app-ajout-abonne',
  templateUrl: './ajout-abonne.component.html',
  styles: [
  ]
})
export class AjoutAbonneComponent implements OnInit {

  constructor(public service : AbonneService) { }

  ngOnInit(): void {
    this.service.refreshList()

  }
  resetForm(form?:NgForm) {
    if(form!=null)
      form.resetForm() ;
      
      }
}
