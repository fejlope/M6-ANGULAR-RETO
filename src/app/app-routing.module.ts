import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { ModalLoginComponent } from './shared/modal-login/modal-login.component';

const routes: Routes = [
{
  path:'',
  component: HomeComponent
},

{
  path:'login',
  component: ModalLoginComponent
}



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
