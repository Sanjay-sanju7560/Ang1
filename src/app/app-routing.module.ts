import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponentComponent } from './dashboard-component/dashboard-component.component';
import { LoginComponentComponent } from './login-component/login-component.component';

const routes: Routes = [
{
  component:LoginComponentComponent,path:''
},
{
  component:DashboardComponentComponent,path:'dashboard'
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
