import { Component, OnInit } from '@angular/core';
import {Geolocation} from '@ionic-native/geolocation/ngx';
@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {

  long:number;
  lat:number;
  constructor(private geolocation:Geolocation) { }

  locationMethod(){
    this.geolocation.getCurrentPosition().then((resp) =>{
      this.lat = resp.coords.latitude;
      this.long = resp.coords.longitude;
    }).catch((error) =>{
      console.log('Error getting location', error)
    })
  }

  ngOnInit() {
  }

}
