import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthguardGuard } from './auth.guard';
import { CoursesComponent } from './courses/courses.component';
import { QuizzesComponent } from './quizzes/quizzes.component';
import { StudentComponent } from './student/student.component';
import { StudentLoginComponent } from './student-login/student-login.component';
import { StudentDashboardComponent } from './student-dashboard/student-dashboard.component';
import { StudentCoursesComponent } from './student-courses/student-courses.component';
import { StudentQuizesComponent } from './student-quizes/student-quizes.component';
import { FirstPageComponent } from './first-page/first-page.component';

const routes: Routes = [
    { path: '', component: FirstPageComponent },
    { path: 'login', component: LoginComponent },
    { path: 'registration', component: RegisterComponent },
    { path: 'dashboard/:email', component: DashboardComponent, canActivate: [AuthguardGuard] },
    { path: 'courses/:email', component: CoursesComponent },
    { path: 'quizzes/:email', component: QuizzesComponent },
    { path: 'student', component: StudentComponent },
    { path: 'student-login', component: StudentLoginComponent },
    { path: 'student-dashboard/:email', component: StudentDashboardComponent },
    { path: 'student-courses/:email', component: StudentCoursesComponent },
    { path: 'student-quizes/:email', component: StudentQuizesComponent }
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }