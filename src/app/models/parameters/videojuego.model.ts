import { CategoriaModel } from './categoria.model';
import { VideojuegoImageModel } from './videojuego-image.model';

export class VideojuegoModel{
    id?:String;
    nombre:String;
    categoriaId:String;
    categoria:CategoriaModel;
    imagenes:VideojuegoImageModel[];
}