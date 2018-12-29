import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../config.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-service-details',
  templateUrl: './service-details.component.html',
  styleUrls: ['./service-details.component.css']
})
export class ServiceDetailsComponent implements OnInit {

serviceDetails={};
  constructor(private configservice:ConfigService,
    private activatedroute:ActivatedRoute) { }

  ngOnInit() {
    const title = +this.activatedroute.snapshot.paramMap.get('title');
    this.serviceDetails = this.getServicesDescription(title);
  }
  getServicesDescription(id:number)
  {
    return this.configservice.getData().home;
  }
  

}
