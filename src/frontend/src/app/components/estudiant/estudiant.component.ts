import { Component, OnInit } from '@angular/core';
import {Estudiant} from './estudiant';
import {EstudiantService} from '../../services/estudiant.service';
import {User} from "./user";
import {Router} from "@angular/router";

@Component({
  selector: 'app-estudiant',
  templateUrl: './estudiant.component.html',
  styleUrls: ['./estudiant.component.css']
})

export class EstudiantComponent implements OnInit {

  estudiants: Estudiant[] = [];
  id:string;
  nombre:string;
  password: string;
  connectedUser;
  myuser: User;
  altresrol;


  constructor(private estudiantService: EstudiantService,private router:Router) {
    this.estudiantService.getStudents()
      .subscribe(estudents => {
        this.estudiants = estudents
      })
  }

  ngOnInit() {
  }
 connect() {
  this.estudiantService.tryToLogin(this.nombre, this.password).subscribe(data => {
    if(data) {
      console.log("mydata:" + data);
      this.myuser =data;
      if(this.myuser.rol==="administrador"){
        this.connectedUser = true;
        this.router.navigate(['buscador']);
      }
      this.altresrol=true

    }
    else
      console.log("noexisteix");



  });


   }

  tracktheanswer(){

    console.log(this.myuser)



  }
  Mostrar(event){


  }

}

