import { Routes, RouterModule } from '@angular/router';

import { AdminpanelComponent } from './adminpanel/adminpanel.component';
import { LoginComponent } from './login/login.component';


const appRoutes: Routes = [
    { path: '', component: LoginComponent},
    { path: 'login', component: LoginComponent },
    { path: 'admin', component: AdminpanelComponent },

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes);