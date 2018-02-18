import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the TaxesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-taxes',
  templateUrl: 'taxes.html',
})
export class TaxesPage {
	result:number;
  difference: number;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  	//this.result = (6*0.892) - 0,35;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TaxesPage');
  }

  calculTaxe(prix, nombre) {
    var temp;
  	//var nombre = 6;
  	if(isNaN(prix)== true || isNaN(nombre) == true) {
  		this.result = 0;
  	}
  	else {
  		temp = (prix*0.892);
      temp = temp - 0.35;
      temp = temp*nombre
      this.result = temp.toFixed(2);
      this.difference = (prix*nombre) - this.result;
  	}

  	
  		
  }

}
