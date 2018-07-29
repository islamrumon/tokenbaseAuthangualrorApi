import { Routes } from '@angular/router';

import { HomeComponent } from '../app/home/home.component';
import { SignUpComponent } from '../app/user/sign-up/sign-up.component';
import { UserComponent } from '../app/user/user.component';
import { SignInComponent } from '../app/user/sign-in/sign-in.component';
import { AuthGuard } from '../app/auth/auth.guard';


export const appRoutes: Routes = [
    { path: 'home', component: HomeComponent, canActivate:[AuthGuard]},
    {
        path:'signup', component: UserComponent,
        children: [{ path: '', component: SignUpComponent}]
    },
    {
        path: 'login', component: UserComponent,
        children: [{path: '', component: SignInComponent}]
    },
    { path: '', redirectTo: '/login', pathMatch: 'full'}
];

