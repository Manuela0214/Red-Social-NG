import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import{ CategoriaListComponent } from './categoria/categoria-list/categoria-list.component';
import{ CategoriaCreationComponent } from './categoria/categoria-creation/categoria-creation.component';
import{ CategoriaEditionComponent } from './categoria/categoria-edition/categoria-edition.component';
import{ CategoriaRemoveComponent } from './categoria/categoria-remove/categoria-remove.component';
import { ConsolaCreationComponent} from './consola/consola-creation/consola-creation.component';
import { ConsolaEditionComponent} from './consola/consola-edition/consola-edition.component';
import { ConsolaListComponent} from './consola/consola-list/consola-list.component';
import { ConsolaRemoveComponent} from './consola/consola-remove/consola-remove.component';
import { OfertaCreationComponent } from './oferta/oferta-creation/oferta-creation.component';
import { OfertaEditionComponent} from './oferta/oferta-edition/oferta-edition.component';
import { OfertaListComponent } from './oferta/oferta-list/oferta-list.component';
import { OfertaRemoveComponent } from './oferta/oferta-remove/oferta-remove.component';
import { VideojuegoCreationComponent} from './videojuego/videojuego-creation/videojuego-creation.component';
import { VideojuegoEditionComponent} from './videojuego/videojuego-edition/videojuego-edition.component';
import { VideojuegoListComponent} from './videojuego/videojuego-list/videojuego-list.component';
import { VideojuegoRemoveComponent} from './videojuego/videojuego-remove/videojuego-remove.component';


const routes: Routes = [
  {
    path:'categoria-list',
    component: CategoriaListComponent
  },
  {
    path:'categoria-creation',
    component: CategoriaCreationComponent
  },
  {
    path:'categoria-edition/:id',
    component: CategoriaEditionComponent
  },
  {
    path:'categoria-remove',
    component: CategoriaRemoveComponent
  },
  {
    path:'consola-list',
    component: ConsolaListComponent
  },
  {
    path:'consola-creation',
    component: ConsolaCreationComponent
  },
  {
    path:'consola-edition',
    component: ConsolaEditionComponent
  },
  {
    path:'consola-remove',
    component: ConsolaRemoveComponent
  },
  {
    path:'oferta-list',
    component: OfertaListComponent
  },
  {
    path:'oferta-creation',
    component: OfertaCreationComponent
  },
  {
    path:'oferta-edition',
    component: OfertaEditionComponent
  },
  {
    path:'oferta-remove',
    component: OfertaRemoveComponent
  },
  {
    path:'videojuego-list',
    component: VideojuegoListComponent
  },
  {
    path:'videojuego-creation',
    component: VideojuegoCreationComponent
  },
  {
    path:'videojuego-edition',
    component: VideojuegoEditionComponent
  },
  {
    path:'videojuego-remove',
    component: VideojuegoRemoveComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ParametersRoutingModule { }
