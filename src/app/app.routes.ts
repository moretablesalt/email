import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'sign-in',
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
  }
];
