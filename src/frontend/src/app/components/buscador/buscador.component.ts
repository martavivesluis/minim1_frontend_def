import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {EstudiantService} from "../../services/estudiant.service";
import {User} from "../estudiant/user";

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.css']
})
export class BuscadorComponent implements OnInit {

  constructor(private estudiantService: EstudiantService,private router:Router) { }
  filter: string;
  option: string;
  usuaris: User[] = [];
  userselected: User;
  ngOnInit() {


  }
  sendMessageclass(){
  this.estudiantService.getOrdenedUsers().subscribe(users => {
    this.usuaris = users
    console.log(this.usuaris);
  })
  }
  sendFilter(){
  this.estudiantService.getUsersByFilter(this.option,this.filter).subscribe(users => {
    this.usuaris = users
    console.log(this.usuaris)
  })
    }
  Modificar(myuser: User){

this.router.navigate(['/update',myuser._id]);
  }

}

