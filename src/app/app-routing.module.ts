import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MainPageComponent} from "./components/main-page/main-page.component";
import { UserInfoComponent } from './components/user-info/user-info.component';
import {CreateUserComponent} from "./components/create-user/create-user.component";
import { LoginComponent } from './components/login/login.component';
import { SignInComponent } from './components/sign-in/sign-in.component';

const routes: Routes = [
  { path: '', component: LoginComponent},
  { path: 'sign-in', component: SignInComponent},
  { path: 'main-page', component: MainPageComponent},
  { path: 'user', component: UserInfoComponent},
  { path: 'create', component: CreateUserComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

