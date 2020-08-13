import { CategoriaModel } from './categoria.model';
import {VideojuegoModel} from './videojuego.model';


export class VideojuegoImageModel{
    id?:String;
    path:String;
    order:number;
    Videojuego:VideojuegoModel;
    videojuegoId:String;
}