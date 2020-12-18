
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AbonnementService } from './../../shared/abonnement.service';

@Component({
  selector: 'app-ajout-abonnement',
  templateUrl: './ajout-abonnement.component.html',
  styleUrls: ['./ajout-abonnement.component.css']
})
export class AjoutAbonnementComponent implements OnInit {

  constructor(public service :AbonnementService) { }

  ngOnInit(): void {
    this.resetForm();

  }
  search() {
    this.service.list = this.service.list.filter(res =>  {
      return res.AbonnementType.toLocaleLowerCase().match(this.service.formData.AbonnementType.toLocaleLowerCase());
    })
  }
  resetForm(form?:NgForm) {
    if(form!=null)
      form.resetForm() ;
      this.service.formData = {
        _id:"",
        AbonnementType:"",
        AbonnementTarif:"",
        Abonne:null,
        QrCodeAbonnement:"",
        
  
      }

      
      }

      
      refrech() {
    
        return this.service.refreshList();
      }

onSubmit(form:NgForm) {
  

      if(this.service.formData._id == "") 
       
         this.insertRecord(form);
      
        else 
      this.updateRecord(form);
    }

    
    insertRecord(form:NgForm) {
      this.service.PostCategorie().subscribe(
        res=>{
          this.resetForm(form);
          
         this.service.refreshList();
        },
        err => {console.log(err);
        } 
      )
    }
    updateRecord(form:NgForm) {
      this.service.PutCategorie().subscribe(
        res=>{
          this.resetForm(form);
    
         this.service.refreshList();
        },
        err => {console.log(err);
        } 
      )
    }

}
