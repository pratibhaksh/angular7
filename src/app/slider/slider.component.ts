import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../config.service';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css'],
  providers:[ConfigService]
})
export class SliderComponent implements OnInit {

  slider={};
  constructor(private configslide: ConfigService) {
    
   }

  ngOnInit() {
   // this.slider=this.getSlider();
    console.log(this.slider);
  }
getSlider()
{
  var test = this.configslide.getData();
  //return test;
  console.log(test);
}
}
