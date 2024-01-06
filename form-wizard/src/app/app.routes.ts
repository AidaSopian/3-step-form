import { Routes } from '@angular/router';

export const routes: Routes = [
    { 
        path: 'main',  
        loadChildren: () => import('./main-form/main-form.route').then(m => m.MainModule),
        // canActivate: [AuthGuard] <-- usually put it here on who can see the module
    }, 
    { path: '',  redirectTo: 'main', pathMatch: 'full' }, 
];
