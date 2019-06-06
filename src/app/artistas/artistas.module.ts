import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArtistaListComponent } from './artista-list/artista-list.component';
import { artistasRouting } from './artistas.routing';
import { FormsModule } from '@angular/forms';
import { ArtistasService } from './artistas.service';
import { ArtistaFormComponent } from './artista-form/artista-form.component';

@NgModule({
  imports: [
    CommonModule, artistasRouting, FormsModule
  ],
  declarations: [ArtistaListComponent, ArtistaFormComponent],
  providers: [ArtistasService]
})
export class ArtistasModule { }
