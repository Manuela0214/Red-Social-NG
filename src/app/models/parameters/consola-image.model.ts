import { CategoriaModel } from './categoria.model';
import {ConsolaModel} from './consola.model';

export class ConsolaImageModel{
    id?:String;
    path:String;
    order:number;
    Consola:ConsolaModel;
    consolaId:String;
}