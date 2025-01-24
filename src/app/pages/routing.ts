import { Routes } from '@angular/router';

const Routing: Routes = [
  {
    path: 'dashboard',
    loadChildren: () =>
      import('./dashboard/dashboard.module').then((m) => m.DashboardModule),
  },

  {
    path: '**',
    redirectTo: 'error/404',
  },
  {
    path: 'lms',
    loadChildren: () =>
      import('./lms/lms.module').then(m => m.LmsModule)
  },

];

export { Routing };
