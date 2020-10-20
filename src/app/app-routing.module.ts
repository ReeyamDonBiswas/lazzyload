import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminModule } from './admin/admin.module';
import {ListComponent} from './users/list/list.component';
import {LoginComponent} from './users/login/login.component'
const routes: Routes = [
  {path:"admin" ,loadChildren:()=>import('./admin/admin.module').then(mod=>mod.AdminModule)},
  {path:'list',component:ListComponent},
  {path:'login',component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
