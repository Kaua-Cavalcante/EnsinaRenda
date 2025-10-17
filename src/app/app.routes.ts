import { Routes } from '@angular/router';
import { CourseComponent } from './pages/course/course.component';
import { ForgotPasswordComponent } from './pages/forgot-password/forgot-password.component';
import { LandingComponent } from './pages/landing/landing.component';
import { LoginComponent } from './pages/login/login.component';
import { ResetPasswordComponent } from './pages/reset-password/reset-password.component';
import { SignupComponent } from './pages/signup/signup.component';

export const routes: Routes = [
    { path: '', title: 'Ensina Renda', component: LandingComponent },
    { path: 'signup', title: 'Cadastre-se', component: SignupComponent },
    { path: 'login', title: 'Bem-vindo de volta', component: LoginComponent },
    { path: 'forgot-password', title: 'Esqueci a senha', component: ForgotPasswordComponent },
    { path: 'reset-password', title: 'Redefinir senha', component: ResetPasswordComponent },
    { path: 'course', title: 'Curso Renda Fixa', component: CourseComponent }
];
