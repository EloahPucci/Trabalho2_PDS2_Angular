import { Routes, RouterModule } from '@angular/router'
import { TrilhasonoraListComponent } from './trilhasonora-list/trilhasonora-list.component';

const TRILHAS_ROUTES: Routes = [
    { path: '', component: TrilhasonoraListComponent }

];
export const trilhassonorasRouting = RouterModule.forChild(TRILHAS_ROUTES);  