import { Injectable } from '@angular/core';
import { Abonne } from './abonne.model';
import {  HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AbonneService {
  formData:Abonne;
  readonly root ='http://localhost:3000/api';
  list : Abonne[];
  
  constructor(private http:HttpClient) { }
  
  PostCategorie() {



    return  this.http.post(this.root + '/Abonne',this.formData)
  
      }
      PutCategorie() {
         return  this.http.put(this.root + '/Abonne/'+this.formData._id,this.formData)

        }
        deleteCategorie(id) {
        
          return  this.http.delete(this.root + '/Abonne/'+id)
            }
  refreshList()
  {
    this.http.get(this.root + '/Abonne').toPromise().then(res => this.list = res as  Abonne[]);
  }
}
