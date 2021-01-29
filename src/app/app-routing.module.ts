import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ThemeComponent } from './theme/theme.component';

const routes: Routes = [

  {path: "", redirectTo: "enter", pathMatch: "full"},

  {path: "enter", component:LoginComponent},
  {path: "register", component:RegisterComponent},

  {path: 'home', component: HomeComponent},
  {path: 'theme', component: ThemeComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
