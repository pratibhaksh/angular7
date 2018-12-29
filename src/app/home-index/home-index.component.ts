import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../config.service';
import { Router} from '@angular/router';
// import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-home-index',
  templateUrl: './home-index.component.html',
  styleUrls: ['./home-index.component.css'],
  providers:[ConfigService]
})
export class HomeIndexComponent implements OnInit {

  intro={};
  
  constructor(private configservice : ConfigService, private routes:Router) {
    console.log(configservice);
    console.log(this.intro);
   }

  ngOnInit() {
    this.intro = this.getOrgniser();
  }

getOrgniser()
{
  return this.configservice.getData().home;
 
}
onEventsClick(id:number)
{
 
 this.routes.navigate(['/eventorgniser',id])
}


}
