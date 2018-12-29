import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomeIndexComponent } from './home-index/home-index.component';
import { ContactComponent } from './contact/contact.component';
import { AppComponent } from './app.component';
import { ClientSayComponent } from './client-say/client-say.component';
import { EventOrgniserComponent } from './event-orgniser/event-orgniser.component';
import { OurServicesComponent } from './our-services/our-services.component';
import { ServiceDetailsComponent } from './service-details/service-details.component';

const route : Routes=[
    { path: '', redirectTo: '/home', pathMatch: 'full' },
{path:'home',component:HomeIndexComponent},
{path:'about',component:AboutComponent},
{path:'clientsay',component:ClientSayComponent},
{path:'eventorgniser/:id',component:EventOrgniserComponent},
{path:'services',component:OurServicesComponent},
{ path: 'serviceDetails/:title', component: ServiceDetailsComponent },
{path:'contact',component:ContactComponent},
]

@NgModule({
    

    imports:[RouterModule.forRoot(route)],
    exports:[RouterModule],

})
export class MyRoutingModule { }
