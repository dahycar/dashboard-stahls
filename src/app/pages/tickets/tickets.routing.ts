import { Routes, RouterModule } from '@angular/router';

import { Tickets } from './tickets.component';

// noinspection TypeScriptValidateTypes
const routes: Routes = [
  {
    path: '',
    component: Tickets
  }
];

export const routing = RouterModule.forChild(routes);
