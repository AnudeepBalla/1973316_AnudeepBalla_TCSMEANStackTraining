import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { QuizComponent } from './quiz/quiz.component';

const routes: Routes = [{
  path:"\home",component:HomeComponent},
{path:"\quiz",component:QuizComponent},
{path:"",redirectTo:"\home",pathMatch:"full"},];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
