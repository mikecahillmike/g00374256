import { Component, OnInit } from '@angular/core'; 
import { Storage } from '@ionic/storage'
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-volkswagen',
  templateUrl: './volkswagen.page.html',
  styleUrls: ['./volkswagen.page.scss'],
})
export class VolkswagenPage implements OnInit { 
  myCar: string; 
  constructor(private storage: Storage, private navCtrl: NavController) { }
ngOnInit() { 
  this.storage.get("myCar")  // get the car that was last chosen from storage
  .then((data) => { 
    this.myCar = data; 
  }) .catch(); 
}
saveCar() { 
  console.log(this.myCar); 
  this.storage.set("myCar", this.myCar) // set the car chosen and save to storage
  .then( () => { 
    this.navBack();
  }) 
  .catch(); 
}
navBack(){
  this.navCtrl.navigateBack('/home'); // return to home page
  location.reload(); // refresh page so the correct car shows at home page
}

}
