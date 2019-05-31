import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrilhasonoraListComponent } from './trilhasonora-list/trilhasonora-list.component';
import { trilhassonorasRouting } from './trilhassonoras.routing';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule, trilhassonorasRouting, FormsModule
  ],
  declarations: [TrilhasonoraListComponent]
})
export class TrilhasSonorasModule { }
