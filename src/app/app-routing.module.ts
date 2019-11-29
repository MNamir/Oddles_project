import { NgModule } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';
import {HomeComponent} from './Components/home/home.component';
import {AppComponent} from './app.component';


const routes: Routes = [
  {
    path: 'Home' , component: AppComponent
  },
  {
    path: '', redirectTo: 'Home', pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
