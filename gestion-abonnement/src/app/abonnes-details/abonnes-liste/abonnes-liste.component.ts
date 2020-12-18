import { Component, OnInit } from '@angular/core';
import { Abonne } from './../../shared/abonne.model';
import { AbonneService } from './../../shared/abonne.service';

import { FormsModule, NgForm }   from '@angular/forms';

@Component({
  selector: 'app-abonnes-liste',
  templateUrl: './abonnes-liste.component.html',
  styles: [
  ]
})
export class AbonnesListeComponent implements OnInit {

  constructor(public service : AbonneService ) {

   }

   ngOnInit(): void {
    this.service.refreshList()

  }
  resetForm(form?:NgForm) {
    if(form!=null)
      form.resetForm() ;
      this.service.formData = {
        _id:"",
        AbonneFirstName :"",
        AbonnePhoneNumber:"",
        AbonneName:"",
        AbonneCin:"",
        AbonneEtudiant:true,
        AbonnePhoto:"",
  
      }

      
      }
  refrech() {
    
    return this.service.refreshList();
  }

  populateForm(pd:Abonne){
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
