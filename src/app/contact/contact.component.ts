import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../config.service';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
  providers:[ConfigService]
})
export class ContactComponent implements OnInit {

  
  intro={};
  constructor(private configslide: ConfigService) {
    
   }

  ngOnInit() {
    this.intro=this.getSlider();
    console.log(this.intro);
  }
getSlider()
{
  return this.configslide.getData();
}

}
