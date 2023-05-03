export interface Equipo{
    nombre:string;
    pais:string;
    nombre_alternativo:string[];
    titulos_ganados:Titulo_ganado[];
    colores:string[];
    nombre_capitan:string;
    entrenador:string;
    logo:string;
    abreviacion:string;
    goleador:Goleador;
    estadio:Estadios;
    jugadores:Jugadores;

};
export interface Titulo_ganado{
    nombre:string;
}

export interface Goleador{
    nombre:string;
    goles:number;

}

export interface Estadios{
        
    nombre: string;
    apodo: string;
    ubicacion: string;
    capacidad: number;
}
export interface Jugadores{
    nombre:string;
    apellido:string;
    edad:number;
    altura:number;
    lugar_nacimiento:string;
    posicion:string;
    numero:number;
    club:string;
}