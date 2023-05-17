import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { Cantante } from 'src/app/models/cantante.model';

@Component({
  selector: 'cantantes',
  templateUrl: './cantantes.component.html',
  styleUrls: ['./cantantes.component.css']
})


export class CantantesComponent implements OnInit {

  inputNombre:string="";
  inputEdad:number=0;
  inputVivo=false;




  cantantes:Cantante[] = [
    {
        nombre:"Freddy Mercury",
        edad: 58,
        vivo: false
    },
    {
      nombre:"Shakira",
      edad:46,
      vivo:true,
    },
    {
      nombre:"Luis Miguel",
      edad:46,
      vivo:true,
    },
    {
      nombre:"Ariana Grande",
      edad:29,
      vivo:true,
    },
    {
      nombre:"Michael Jackson",
      edad:50,
      vivo:false,
    },
    {
      nombre:"Jhon Lennon",
      edad:40,
      vivo:false,
    },
    {
      nombre:"Miley Cyrus",
      edad:30,
      vivo:true,
    },
    {
      nombre:"Kurt Cobain",
      edad:27,
      vivo:false,
    },
    {
      nombre:"Aurora Aksnes",
      edad:26,
      vivo:true,
    },
    {
      nombre:"Bob Marley",
      edad:36,
      vivo:false,
    },
  ]

  
    


  ngOnInit(): void{
    console.log("Hola")
    console.log(this.cantantes[0].nombre);
    console.log(this.cantantes[0].nombre.length);
    console.log(this.cantantes[0].nombre.charAt(1));
    console.log(this.cantantes[0].nombre.substring(1,4));
    console.log(this.cantantes[0].nombre.replace("Mercury", "Mercurio"));
    console.log(this.cantantes[0].nombre.toUpperCase());
    console.log(this.cantantes[0].nombre.concat(" Perez"));
    console.log(this.cantantes[0].nombre.indexOf("Mercury"));
    console.log(this.cantantes[0].nombre.includes("Mercury"));
    console.log(this.cantantes[0].nombre.startsWith("Fre"));
    console.log(this.cantantes);
    console.table(this.cantantes[2]);
    console.log(this.cantantes.length);
    console.log(this.cantantes.pop()); /**pop elimina el ultimo elemento */
    this.cantantes.shift(); /**shift elimina el primer nombre u objeto */
    /**2 es posicion de arreglo que va a empezar a eliminar y el 1 es el #de elementos eliminados */
    this.cantantes.splice(2,1);
    /**crear variable dentro de un metodo */
    let nuevoCantantante:Cantante={
      nombre:"Esteman",
      edad:38,
      vivo:true,
    } 
    this.cantantes.push(nuevoCantantante); /**El PUSH agrega la nueva variable */ 
    console.log(this.cantantes);
    
    /**esto sirve para pasar de un arreglo grande a solo los strings */
    let nombres = this.cantantes.map(cantante => cantante.nombre.toUpperCase()).sort().reverse();
    /** puedo poner SORT arreglo de strings o numeros, basicamente es para organizar - 
     * REVERSE me da el parametro al contrario (al reves)
    */
   let sumas = this.cantantes.map(cantante => cantante.edad+2);
   /*CONSOLE me imprime los valores*/
   console.log(sumas);

   let raices = this.cantantes.map(cantante => Math.sqrt(cantante.edad));
   console.log(raices);

   let potencia = this.cantantes.map(cantante => Math.pow(cantante.edad,2));
   console.log(potencia);

    console.log(nombres);

    

  }
  agregarCantante(){
    console.log("click funciona")
    /** LET se usa para crear un objeto nuevo*/
    let nuevoCantante:Cantante ={
      /**estas son las variables que ya tengo, luego le pongo THIS.inputBLABLABLA*/
      nombre:this.inputNombre,
      edad:this.inputEdad,
      vivo:this.inputVivo,
      
    }
    if (this.inputNombre>"",this.inputEdad>0){
      (this.inputEdad>0);
    }
    this.cantantes.push(nuevoCantante);
    this.limpiar();
  }
  
  limpiar() {
    this.inputNombre="";
    this.inputEdad=0;
    this.inputVivo=false;
  }
}



