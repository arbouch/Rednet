import { Injectable } from '@angular/core';
import { Abonne } from './abonne.model';
import {  HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AbonneService {
  formData:Abonne;
  readonly root ='http://localhost:3000/';
  list : Abonne[];
  constructor(private http:HttpClient) { }
  PostCategorie() {



    return  this.http.post(this.root + '/Abonnes',this.formData)
  
      }
      PutCategorie() {
      
        return  this.http.put(this.root + '/Abonnes/'+this.formData.AboneeId,this.formData)
        }
        deleteCategorie(id) {
        
          return  this.http.delete(this.root + '/Abonnes/'+id)
            }
  refreshList()
  {
    this.http.get(this.root + '/Abonnes').toPromise().then(res => this.list = res as  Abonne[]);
  }
}
