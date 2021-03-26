import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MyAuthGaurd } from './myauthgaurd';
import { SignupComponent } from './signup/signup.component';


const routes: Routes = [
  
  {path:"\login", component:LoginComponent},
  {path:"\home", component:HomeComponent, canActivate:[MyAuthGaurd]},
  {path:"\signup", component:SignupComponent},
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }