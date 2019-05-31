import { Routes, RouterModule } from '@angular/router'
import { ArtistaListComponent } from './artista-list/artista-list.component';

const ARTISTAS_ROUTES: Routes = [
    { path: '', component: ArtistaListComponent }

];
export const artistasRouting = RouterModule.forChild(ARTISTAS_ROUTES);  