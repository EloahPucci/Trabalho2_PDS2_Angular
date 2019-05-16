import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilmeListComponent } from './filme-list/filme-list.component';
import { filmesRouting } from './filmes.routing';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule, filmesRouting, FormsModule
  ],
  declarations: [FilmeListComponent]
})
export class FilmesModule { }
