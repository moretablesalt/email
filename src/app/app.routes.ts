import { Routes } from '@angular/router';
import {AuthGuard} from "./auth/auth.guard";

export const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: 'inbox',
    canLoad: [AuthGuard],
    loadChildren: () => import('./inbox/inbox.module').then(m => m.InboxModule)
  }
];
