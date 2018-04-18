import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import "rxjs/Rx";
import {Estudiant} from '../components/estudiant/estudiant'
import {User} from "../components/estudiant/user";
import {Observable} from "rxjs/Observable";

@Injectable()
export class EstudiantService {
  domain: string =" http://localhost:3000";
  userModificar:User;

    constructor(private http: HttpClient) {
          }

  /* GET USERS BY FILTER*/
  getUsersByFilter(filter: String,value: String){
    return this.http.get<User[]>(`${this.domain}/users/filter/`+filter+'/'+value).map(res=>res)}


    getUsersByAttribute(filter: String,value: String){
      return this.http.get<User>(`${this.domain}/users/filter/`+filter+'/'+value).map(res=>res)

    }
  getStudents(){
      return this.http.get<Estudiant[]>(`${this.domain}/students`)
        .map(res=>res);

  }

  tryToLogin(nombre: String,contra: String)
  { return this.http.get<User>(`${this.domain}/users/logn/`+nombre+'/'+contra).map(res=>res)
   }

  getOrdenedUsers(){
    return this.http.get<User[]>(`${this.domain}/users/filter/sort`).map(res=>res)
  }
  getUpdate(id:String,myuser:User){
   return this.http.put<String>(`${this.domain}/users/`+id,myuser).map(res=>res)
}
}
