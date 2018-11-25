import { LoginComponent } from './login/login.component';
import { CodigosComponent } from './codigos/codigos.component';
import { Routes } from '@angular/router';
import { AuthGuard } from './services/auth-guard.service';

export const rootRouterConfig: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    { path: 'codigos', component: CodigosComponent, canActivate: [AuthGuard] }
  ];
