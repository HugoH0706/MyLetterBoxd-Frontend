import { Routes } from '@angular/router';
import { LoginComponent } from './features/login/login.component';
import { SignupComponent } from './features/signup/signup.component';
import { AdminComponent } from './features/admin/admin.component';
import { authGuard } from './auth/auth.guard';
import { HomepageComponent } from './features/homepage/homepage.component';
import { EntertainmentComponent } from './features/entertainment/entertainment.component';
import { FilmComponent } from './features/film/film.component';
import { FilmdetailComponent } from './features/filmdetail/filmdetail.component';
import { SavedentertainmentComponent } from './features/savedentertainment/savedentertainment.component';

export const routes: Routes = [
    // {path: '', redirectTo: '/login', pathMatch: 'full'},
    {path: '', component: HomepageComponent},
    {path: 'login', component: LoginComponent},
    {path: 'signup', component: SignupComponent},
    {path: 'admin', component: AdminComponent, canActivate: [authGuard]},
    {path: 'entertainment', component: EntertainmentComponent},
    {path: 'films', component: FilmComponent},
    {path: 'films/:id', component: FilmdetailComponent},
    {path: 'savedentertainment', component: SavedentertainmentComponent},
    
];
