import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Components/header/header.component';
import { ServicesComponent } from './Components/services/services.component';
import { TrendsComponent } from './Components/trends/trends.component';
import { FooterComponent } from './Components/footer/footer.component';
import { ContactUsComponent } from './Components/contact-us/contact-us.component';
import { ContactFormComponent } from './Components/contact-form/contact-form.component';
import { HomeComponent } from './Components/home/home.component';
import { ServicetypeComponent } from './Components/servicetype/servicetype.component';
import { TrendtypeComponent } from './Components/trendtype/trendtype.component';
import {CarouselModule} from 'ngx-owl-carousel-o';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ReactiveFormsModule} from '@angular/forms';
import {PopupComponent} from './Components/popup/popup.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ServicesComponent,
    TrendsComponent,
    FooterComponent,
    ContactUsComponent,
    ContactFormComponent,
    HomeComponent,
    ServicetypeComponent,
    TrendtypeComponent,
    PopupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CarouselModule,
    BrowserAnimationsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
