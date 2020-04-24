import { Component, OnInit } from '@angular/core'; 
import { Storage } from '@ionic/storage'
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-bmw',
  templateUrl: './bmw.page.html',
  styleUrls: ['./bmw.page.scss'],
})
export class BmwPage implements OnInit {
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
    location.reload();
  }
}
