import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArtistaListComponent } from './artista-list/artista-list.component';
import { artistasRouting } from './artistas.routing';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule, artistasRouting, FormsModule
  ],
  declarations: [ArtistaListComponent]
})
export class ArtistasModule { }
