import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../config.service';
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  intro={};
  constructor(private configservice : ConfigService) {
    console.log(configservice);
    console.log(this.intro);
   }

  ngOnInit() {
    this.intro = this.getOrgniser();
  }

getOrgniser()
{
  return this.configservice.getData()
 
}

}
