import { Component, OnInit } from '@angular/core';
import {EstudiantComponent} from '../estudiant/estudiant.component'
import {EstudiantService} from "../../services/estudiant.service";
import {Router,ActivatedRoute} from "@angular/router";
import {User} from "../estudiant/user";
@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  private myuser:User;
  id: string
  nouNom: string
  nouCognom: string
  nouRol: string
  nouEstat: string
  connecteduser;
  constructor(private estudiantService: EstudiantService,private route:ActivatedRoute,private router:Router) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      if (params['myuser._id'] != null) {
        this.id = params['myuser._id'];
      }
    });
    this.estudiantService.getUsersByAttribute("id", this.id).subscribe(data => {
      if (data) {
        this.myuser = data
        this.connecteduser=true;
      }
      else {
        console.log("res")
      }

    });

  }
  sendCanvi(){
    console.log(this.myuser)
    if(this.nouNom!=undefined)
    {
      this.myuser.nombre=this.nouNom;
    }
    if(this.nouCognom!=undefined)
    {
      this.myuser.apellidos=this.nouCognom;

    }
    if(this.nouRol!=undefined)
    {
      this.myuser.rol=this.nouRol;
    }
    if(this.nouEstat!=undefined)
    {
      this.myuser.estado=this.nouEstat;
    }
     this.estudiantService.getUpdate(this.myuser._id,this.myuser).subscribe(data => {
      if (data) {
        console.log(data);
      }
      else {
        console.log("res")
      }
    });

  }

    }
