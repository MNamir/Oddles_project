import { NgModule } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';
import {AppComponent} from './app.component';
import {PopupComponent} from './Components/popup/popup.component';


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
