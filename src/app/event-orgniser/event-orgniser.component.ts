import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../config.service';
import { ActivatedRoute } from '@angular/router';
import { Router} from '@angular/router';

@Component({
  selector: 'app-event-orgniser',
  templateUrl: './event-orgniser.component.html',
  styleUrls: ['./event-orgniser.component.css'],
  providers:[ConfigService]
})
export class EventOrgniserComponent implements OnInit {

  selected=1;

  intro={};
  
  constructor(private configservice : ConfigService,activatedRoutes:ActivatedRoute,
    private router:Router) {
    
    activatedRoutes.params.subscribe((params)=>
    {
      this.selected = params["id"];
    })
    console.log(this.intro);
   }

  ngOnInit() {
    this.intro = this.getOrgniser();
  }

getOrgniser()
{
  return this.configservice.getData().home
 
}

next()
{
  +this.router.navigate([`eventorgniser #${this.selected++}`]);
  // this.clickMessage = (`Click #${this.clicks++}. ${evtMsg}`);
  // this.selected ++;
  // counter = this.counter + 1;
}
pre()
{
 +this.router.navigate([`eventorgniser,${this.selected--}`]);
  // this.selected --;
}
}
