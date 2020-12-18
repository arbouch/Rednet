import { Component, OnInit } from '@angular/core';
import { Abonnement } from './../../shared/abonnement.model';
import { AbonnementService } from './../../shared/abonnement.service';

import { FormsModule, NgForm }   from '@angular/forms';

@Component({
  selector: 'app-abonnement-liste',
  templateUrl: './abonnement-liste.component.html',
  styles: [
  ]
})
export class AbonnementListeComponent implements OnInit {

  constructor(public service : AbonnementService) { }

  ngOnInit(): void {
    this.service.refreshList()
  }
  resetForm(form?:NgForm) {
    if(form!=null)
      form.resetForm() ;
      this.service.formData = {
        _id:"",
        AbonnementType :"",
        AbonnementTarif:"",
        Abonne:null,
        QrCodeAbonnement:"",
  
      }

      
      }
  refrech() {
    
    return this.service.refreshList();
  }

  populateForm(pd:Abonnement){
    this.service.formData=Object.assign({},pd)
      }
      onDelete(_id: string, form: NgForm){
        if(confirm('Etes vous sur de vouloir supprimer ?'+ _id)
        )
        {
        this.service.deleteCategorie(_id).subscribe(res =>  {this.service.refreshList();
        } ,
          err=> {
            console.log(err)
          })
      }
    }
}


