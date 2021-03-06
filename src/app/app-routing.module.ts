import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {LoginComponent} from './login/login.component';
import {NerrpComponent} from './nerrp/nerrp.component';
import {RentComponent} from './rent/rent.component';
import {AdminComponent} from './admin/admin.component';
import {ReserveComponent} from './reserve/reserve.component';
import {MapComponent} from './map/map.component';

const routes: Routes = [

  {path: '', component: HomeComponent},
  {path: 'Home', component: HomeComponent},
  {path: 'Login', component: LoginComponent},
  {path: 'Rent', component: RentComponent},
  {path: 'Admin', component: AdminComponent},
  {path: 'Reserve', component: ReserveComponent},
  {path: 'Map', component: MapComponent},
  {path: '**', component: NerrpComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
