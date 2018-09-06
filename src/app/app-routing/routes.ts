import { Routes } from '@angular/router';
import { RepositoriesComponent } from '../repositories/repositories.component';
import { HomeComponent } from '../home/home.component';

export const routes: Routes = [
    { path: 'home', component: HomeComponent},
    { path: 'repositories', component: RepositoriesComponent},
    { path: '', redirectTo: '/home', pathMatch: 'full'},
]