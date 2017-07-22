import { Component } from '@angular/core';
import { NavController} from 'ionic-angular';
import { AlertController} from 'ionic-angular'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public alertCtrl: AlertController) {

  }

  presentAlert()
  {
	  	let alert = this.alertCtrl.create({
		title: 'Low battery',
    	subTitle: '10% of battery remaining',
    	buttons: ['Dismiss']
  		});
  		alert.present();
  }

}
