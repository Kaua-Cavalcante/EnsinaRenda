import { Routes } from '@angular/router';
import { authGuard } from './guards/auth.guard';
import { ConfirmExitGuard } from './guards/confirm-exit.guard';
import { AssessmentTestComponent } from './pages/course/components/assessment-test/assessment-test.component';
import { CourseContentComponent } from './pages/course/components/course-content/course-content.component';
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
    { 
        path: 'course',
        loadComponent: () => import('./pages/course/course.component').then(m => m.CourseComponent),
        canActivate: [authGuard],
        children: [
            { path: '', title: 'Curso Renda Fixa', component: CourseContentComponent },
            { path: 'prova', title: 'Prova Renda Fixa', component: AssessmentTestComponent, canDeactivate: [ConfirmExitGuard] }
        ]
    },
];
