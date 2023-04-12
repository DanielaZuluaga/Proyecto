import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  dato: any = 15;
  title: string = 'Mockup';
  edad: number = 24;
  pasaLaMateria: boolean = true;
  contador: number = 0;
  aumentar(){
    this.contador=this.contador+1;
  }
  disminuir(){
    this.contador=this.contador-1
  }
  multiplicarx2(){
    this.contador=this.contador*2
  }
  division(){
    this.contador=this.contador/2
  }
  resetear(){
    this.contador=this.contador=0
  }
  esPar(numero:number):boolean {
    if(numero % 2 === 0 ){
      return true;
    } else{return false;}
  }
  estudiantes:string[]=["Daniela","Walter","Romario","Natali","Luisa","Leidy","Alejandro"];
}
