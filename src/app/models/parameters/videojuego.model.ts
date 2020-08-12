import { CategoriaModel } from './categoria.model';

export class VideojuegoModel{
    id?:String;
    nombre:String;
    categoriaId:String;
    categoria:CategoriaModel;
}