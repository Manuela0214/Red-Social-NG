import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ParametersRoutingModule } from './parameters-routing.module';
import { VideojuegoCreationComponent } from './videojuego/videojuego-creation/videojuego-creation.component';
import { VideojuegoEditionComponent } from './videojuego/videojuego-edition/videojuego-edition.component';
import { VideojuegoListComponent } from './videojuego/videojuego-list/videojuego-list.component';
import { VideojuegoRemoveComponent } from './videojuego/videojuego-remove/videojuego-remove.component';
import { CategoriaCreationComponent } from './categoria/categoria-creation/categoria-creation.component';
import { CategoriaEditionComponent } from './categoria/categoria-edition/categoria-edition.component';
import { CategoriaListComponent } from './categoria/categoria-list/categoria-list.component';

import { ConsolaCreationComponent } from './consola/consola-creation/consola-creation.component';
import { ConsolaEditionComponent } from './consola/consola-edition/consola-edition.component';
import { ConsolaListComponent } from './consola/consola-list/consola-list.component';
import { ConsolaRemoveComponent } from './consola/consola-remove/consola-remove.component';
import { OfertaCreationComponent } from './oferta/oferta-creation/oferta-creation.component';
import { OfertaEditionComponent } from './oferta/oferta-edition/oferta-edition.component';
import { OfertaListComponent } from './oferta/oferta-list/oferta-list.component';
import { OfertaRemoveComponent } from './oferta/oferta-remove/oferta-remove.component';
import {NgxPaginationModule} from 'ngx-pagination';
import { NgxSpinnerModule } from "ngx-spinner";

import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { VideojuegoListHomeComponent } from './videojuego/videojuego-list-home/videojuego-list-home.component';
import { VideojuegoListDetailsComponent } from './videojuego/videojuego-list-details/videojuego-list-details.component';
import { VideojuegoImagesComponent } from './videojuego/videojuego-images/videojuego-images.component';


@NgModule({
  declarations: [VideojuegoCreationComponent, VideojuegoEditionComponent, VideojuegoListComponent, VideojuegoRemoveComponent, CategoriaCreationComponent, CategoriaEditionComponent, CategoriaListComponent,  ConsolaCreationComponent, ConsolaEditionComponent, ConsolaListComponent, ConsolaRemoveComponent, OfertaCreationComponent, OfertaEditionComponent, OfertaListComponent, OfertaRemoveComponent, VideojuegoListHomeComponent, VideojuegoListDetailsComponent, VideojuegoImagesComponent],
  imports: [
    CommonModule,
    ParametersRoutingModule,
    NgxPaginationModule,
    NgxSpinnerModule,

    ReactiveFormsModule,
    FormsModule

  ]
})
export class ParametersModule { }
