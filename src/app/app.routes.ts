import { Routes } from '@angular/router';
import { HomeComponent } from './Pages/home/home.component';
import { CompanyComponent } from './Pages/company/company.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'company',
        component: CompanyComponent
    }
];
