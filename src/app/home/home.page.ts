import { Component, OnInit, ɵɵcontainerRefreshStart } from '@angular/core'; 
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit { 
  myCar: string; 
  i: number = 0;
  constructor(private storage: Storage) { }
ngOnInit() { 
   this.storage.get("myCar") 
  .then((data) => { 
    this.myCar = data;
   }) 
   .catch (); }

}
