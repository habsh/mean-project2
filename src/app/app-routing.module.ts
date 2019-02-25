import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ManagerDetailsComponent } from './manager-details/manager-details.component';
import {AppComponent} from './app.component'

const routes: Routes = [
  { path: '', redirectTo: 'getManagerDetails/112443', pathMatch: 'full'}, //Routing just for demo purpose.To be removed during integration
  { path: 'getManagerDetails/:id', component: ManagerDetailsComponent }
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
