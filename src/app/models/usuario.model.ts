import { RegistroModel } from "./registro.model";

export class UsuarioModel{
    id?:string;
    primer_nombre:string;
    segundo_nombre?:string;
    primer_apellido:string;
    segundo_apellido?:string;
    celular:string;
    email:string;
    pais:string;
    ciudad:string;
    fecha_nacimiento:string;
    //foto_perfil:String; 
    genero?:string;
    intereses:string;
    mensajesId?:string;
    registro:RegistroModel;
}