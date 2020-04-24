import { Component, OnInit } from '@angular/core'; 
import { Storage } from '@ionic/storage'
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-car',
  templateUrl: './car.page.html',
  styleUrls: ['./car.page.scss'],
})
export class CarPage implements OnInit {
  myCar: string; 
  constructor(private storage: Storage, private navCtrl: NavController) { }

  ngOnInit() { 
    this.storage.get("myCar") 
    .then((data) => { 
      this.myCar = data; 
    }) .catch(); 
  }
  saveCar() { 
    console.log(this.myCar); 
    this.storage.set("myCar", this.myCar) 
    .then( () => { 
      this.navBack();
    }) 
    .catch(); 
  }
  navBack(){
    this.navCtrl.navigateBack('/home'); 
  }
}