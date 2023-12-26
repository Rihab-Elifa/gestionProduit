import { Component } from '@angular/core';

@Component({
  selector: 'app-liste',
  templateUrl: './liste.component.html',
  styleUrls: ['./liste.component.scss']
})
export class ListeComponent {
  b:boolean=true;
change(){
  this.b=false;
}
change2(){
  this.b=true;
}

}
