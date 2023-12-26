import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListeComponent } from './liste/liste.component';
import { AjoutComponent } from './ajout/ajout.component';

const routes: Routes = [
  {path:'',component:ListeComponent,children:[{
    path:'page1',component:AjoutComponent
  }]},
  {path:'page1',component:AjoutComponent},
  {path:'Accueil',component:ListeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

}
