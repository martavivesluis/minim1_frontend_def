import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { EstudiantComponent } from './components/estudiant/estudiant.component';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import {EstudiantService} from "./services/estudiant.service";
import { AppRoutingModule } from './/app-routing.module';
import { BuscadorComponent } from './components/buscador/buscador.component';
import {RouterModule, Routes} from "@angular/router";
import { UpdateComponent } from './components/update/update.component';

const appRoutes: Routes = [
  { path: 'login', component: EstudiantComponent },
  { path: 'buscador',
    component: BuscadorComponent,
    data: { title: 'Heroes List' }
  },
  { path: 'update/:myuser._id',
    component: UpdateComponent,
    }


];
@NgModule({
  declarations: [
    AppComponent,
    EstudiantComponent,
    BuscadorComponent,
    UpdateComponent,
     ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    RouterModule.forRoot(
      appRoutes,{enableTracing: true})

  ],
  providers: [EstudiantService],
  bootstrap: [AppComponent]
})
export class AppModule { }
