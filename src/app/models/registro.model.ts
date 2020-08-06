export class RegistroModel{
    id?:String;
    rol?:number;
    nombre_usuario:String;
    contrasena?:String;
    usuarioId?:String;
    token?: String;
    isLogged: Boolean = false;
}