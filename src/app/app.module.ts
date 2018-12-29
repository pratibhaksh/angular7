import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { FormsModule } from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import{MyRoutingModule}from './my-routing.module';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SliderComponent } from './slider/slider.component';
import { EventOrgniserComponent } from './event-orgniser/event-orgniser.component';
import { RegisterComponent } from './register/register.component';
import { OurServicesComponent } from './our-services/our-services.component';
import { ClientSayComponent } from './client-say/client-say.component';
import { UpComingEventComponent } from './up-coming-event/up-coming-event.component';
import { FooterComponent } from './footer/footer.component';
import { AboutComponent } from './about/about.component';
import { BackgroundImgComponent } from './background-img/background-img.component';
import { HomeIndexComponent } from './home-index/home-index.component';
import { ContactComponent } from './contact/contact.component';
import { ConfigService } from './config.service';
import { ServiceDetailsComponent } from './service-details/service-details.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SliderComponent,
    EventOrgniserComponent,
    RegisterComponent,
    OurServicesComponent,
    ClientSayComponent,
    UpComingEventComponent,
    FooterComponent,
    AboutComponent,
    BackgroundImgComponent,
    HomeIndexComponent,
    ContactComponent,
    ServiceDetailsComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MyRoutingModule,
    FormsModule,
    NgbModule
  ],
  providers: [ConfigService],
  bootstrap: [AppComponent]
})
export class AppModule { }
