import { Routes, RouterModule } from '@angular/router'
import { TrilhasonoraListComponent } from './trilhasonora-list/trilhasonora-list.component';
import { TrilhasonoraFormComponent } from './trilhasonora-form/trilhasonora-form.component';

const TRILHAS_ROUTES: Routes = [
    { path: '', component: TrilhasonoraFormComponent }

];
export const trilhassonorasRouting = RouterModule.forChild(TRILHAS_ROUTES);  