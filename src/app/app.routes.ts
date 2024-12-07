import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'home',
        loadComponent: () => import('./port/pages/port-home/port-home.component').then((m) => m.PortHomeComponent)
    },
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'home'
    },
    {

        path: '**',
        pathMatch: 'full',
        redirectTo: 'home'
    }
];
