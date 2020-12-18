import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AbonneService } from './../../shared/abonne.service';





@Component({
  selector: 'app-ajout-abonne',
  templateUrl: './ajout-abonne.component.html',
  styles: [
  ]
})
export class AjoutAbonneComponent implements OnInit {

  constructor(public service :AbonneService ) 
  {   }

  ngOnInit():void {
    this.resetForm();

  }
  search() {
    this.service.list = this.service.list.filter(res =>  {
      return res.AbonneFirstName.toLocaleLowerCase().match(this.service.formData.AbonneFirstName.toLocaleLowerCase());
    })
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

      


  


