import { Routes, RouterModule } from '@angular/router'
import { ArtistaListComponent } from './artista-list/artista-list.component';
import { ArtistaFormComponent } from './artista-form/artista-form.component';

const ARTISTAS_ROUTES: Routes = [
    { path: '', component: ArtistaFormComponent }

];
export const artistasRouting = RouterModule.forChild(ARTISTAS_ROUTES);  