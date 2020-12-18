import { Injectable } from '@angular/core';
import {  HttpClient} from "@angular/common/http";
import { Abonnement } from './abonnement.model';

@Injectable({
  providedIn: 'root'
})
export class AbonnementService {
  formData:Abonnement;
  readonly root ='http://localhost:3000/api';
  list : Abonnement[];

  constructor(private http:HttpClient) { }
  PostCategorie() {



    return  this.http.post(this.root + '/Abonnement',this.formData)
  
      }
      PutCategorie() {
         return  this.http.put(this.root + '/Abonnement/'+this.formData._id,this.formData)

        }
        deleteCategorie(id) {
        
          return  this.http.delete(this.root + '/Abonnement/'+id)
            }
  refreshList()
  {
    this.http.get(this.root + '/Abonnement').toPromise().then(res => this.list = res as  Abonnement[]);
  }
}
