import { Component } from '@angular/core';
import { Equipo } from './models/seleccion.model';

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
  animales = [
    {
      nombre: "Loro",
      imagen: "https://cdn.download.ams.birds.cornell.edu/api/v1/asset/95481341/1800", 
      peso: "50gr",
      color: "Verde",
      numero_patas: 2,
      alimentacion: "herbivoro", 
      vuela: "true",
    },
    {
      nombre: "jirafa",
      imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Giraffa_camelopardalis_angolensis.jpg/640px-Giraffa_camelopardalis_angolensis.jpg" ,
      peso: "1200kg",
      color: "amarillo y marron",
      numero_patas: 4,
      alimentacion: "herbivoro",
      vuela: "false" ,
    },
    {
      nombre: "perro",
      imagen: "https://definicion.de/wp-content/uploads/2013/03/perro-1.jpg" , 
      peso: "30kg",
      color: "amarillo",
      numero_patas:4,
      alimentacion: "carnivoro",
      vuela: "false" ,
    },
    {
      nombre: "pez" ,
      imagen: "https://petronor.eus/wp-content/uploads/2015/03/mojarra1.jpg",
      peso: "350gr",
      color: "gris azulado o rosa",
      numero_patas: 0,
      alimentacion: "omnivoro",
   
      vuela: "false" ,
    },
    {
      nombre: "tigre" ,
      imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/Tigress_at_Jim_Corbett_National_Park.jpg/1200px-Tigress_at_Jim_Corbett_National_Park.jpg",
      peso: "200kg",
      color: "naranja con blanco y negro", 
      numero_patas: 4,
      alimentacion:"carnivoro",
      vuela: "false",
    },
     {
      nombre: "cisne",
      imagen: "data:image/jpeg;base64,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",
      peso: "12kg",
      color: "blanco",
      numero_patas: 2,
      alimentacion: "herbivoro",
      vuela: "true",
     },
     {
      nombre: "canguro",
      imagen: "https://upload.wikimedia.org/wikipedia/commons/4/46/Macropus_giganteus_Juvenile.jpg",
      peso: "50kg",
      color: "marron",
      numero_patas: 4,
      alimentacion: "herbivoro",
      vuela: "false",
     },
     {
     nombre: "oso polar",
     imagen: "https://upload.wikimedia.org/wikipedia/commons/0/09/Polar_Bear_-_Alaska.jpg",
     peso:"400kg",
     color: "blanco",
     numero_patas: 4,
     alimentacion: "carnivoro",
     vuela: "false",
    }
    
  ];
  
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


  

  
  

  //   equipo: Equipo= {
  //     nombre:"Selección de fútbol de Croacia",
  //     pais:"Croacia",
  //     nombre_alternativo:["Vatreni (Los Ardientes)"],
  //     titulo_ganado:[
  //       //en si Croacia no tiene titulos desde que se independizo de Yugoslavia, asi que pondre los titulos de yugoslavia.
  //       {
  //         nombre:"Copa Mundial: Tercer lugar en 1998"
  //       },
  //       {
  //         nombre:" Copa mundial: Finalista en 2018"
  //       },
  //       {
  //         nombre:"Eurocopa: cuartos de finales en 1996 y 2008"
  //       }
  //     ],
  //     colores:["azul","rojob","blanco"],
  //     nombre_capitan:"Luka Modric",
  //     entrenador:"Zlatko Dalic",
  //     logo:"https://logodownload.org/wp-content/uploads/2022/11/croatia-national-football-team-logo-0.png",
  //     abreviacion:"CRO",
  //     goleador:
  //     {
  //         nombre:"Davor Suker",
  //         goles:45
  //     },
  //     estadio:[{
  //       nombre:"Maksimir",
  //       apodo:"El milagro del bosque Maksimir",
  //       ubicacion:"Zagreb",
  //       capacidad:	40000,
  //     },
  //     {
  //       nombre:"Poljud",
  //       apodo:"Starid Plac",
  //       ubicacion:"Split",
  //       capacidad: 35000,
  //     },
  //   ],
  //   numero_jugadores:11,
  //   jugadores:[
  //     {
  //       nombre:"Dominik",
  //       apellido:"Livacovic",
  //       edad:28,
  //       altura:187,
  //       lugar_nacimiento:"Zadar",
  //       posicion:"portero",
  //       numero:1,
  //       club:"GNK Dinamo Zagreb",
  //     },
  //     {
  //       nombre:"Lovro",
  //       apellido:"Majer",
  //       edad:25,
  //       altura:178,
  //       lugar_nacimiento:"Zagreb",
  //       posicion:"Mediocentro ofensivo",
  //       numero:21,
  //       club:"Stade Rennais FC",
  //     },
  //     {
  //       nombre:"",
  //       apellido:"",
  //       edad:,
  //       altura:,
  //       lugar_nacimiento:"",
  //       posicion:"",
  //       numero:,
  //       club:"",
  //     },
  //   ],

  // }
}

