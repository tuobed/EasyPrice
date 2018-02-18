import { Component, OnInit} from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {AboutPage} from '../about/about';
import { HttpClient } from '@angular/common/http';

/**
 * Generated class for the InfoJeuPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-info-jeu',
  templateUrl: 'info-jeu.html',
})
export class InfoJeuPage {

	
	JsonReceiver: any;
	JsonReceiver2: any;
	prix: string;
	username: string;

	items: Array<{vendeur: string, prix: string}>;


  constructor(public navCtrl: NavController, public navParams: NavParams, private http: HttpClient) {

  		var parameter1;
  		var monPrixArray=[];
		var monVendeurArray=[];
		var temp=[];
  		
        if(navParams.get('nom')!=null) {
    		parameter1 = navParams.get('nom');
    		this.username = navParams.get('utilisateur');
    		//console.log(this.parameter1);
    	}
    	else {
    		parameter1 = "err";
    	}


    const body = {jeu: parameter1, vendeur: this.username};
    console.log(body);
    const bodyJSON = JSON.stringify(body);
    this.http.post('http://151.80.145.1/RecupererPrixMarc.php', bodyJSON).subscribe(
      data => this.JsonReceiver = data,
      err => console.log('error', err),
      () => {


      	console.log(this.JsonReceiver);
      	console.log(JSON.stringify(this.JsonReceiver.Prix));
        temp = JSON.parse(JSON.stringify(this.JsonReceiver.Prix));
      	if(temp[0] != null) {
      		
      		this.prix = temp[0].toFixed(2) + "€";
      	}
      	else {
      		this.prix = "Pas de prix pour ce jeu";
      	}
   

      });


    const body2 = {jeu: parameter1, vendeur:"Pixon_Gaming"};
    console.log(body2);
    const bodyJSON2 = JSON.stringify(body2);
    this.http.post('http://151.80.145.1/RecupererPrixAutres.php', bodyJSON2).subscribe(
      data => this.JsonReceiver2 = data,
      err => console.log('error', err),
      () => {

      		//console.log(this.JsonReceiver2);
      		//console.log(this.JsonReceiver2.Price);
      	
      		if(this.JsonReceiver2!=null) {
      		//console log(JSON.stringify(this.JsonReceiver2.Sellername));
      		monVendeurArray = JSON.parse(JSON.stringify(this.JsonReceiver2.Sellername));
      		monPrixArray = JSON.parse(JSON.stringify(this.JsonReceiver2.Price));

      		//console.log(monVendeurArray[1]);
  
          	this.items = [];
          	for (let i = 0; i < monPrixArray.length; i++) {
            	this.items.push({
              		vendeur: monVendeurArray[i] + " - " +monPrixArray[i].toFixed(2) + "€", 
              		prix: monPrixArray[i] 
            	});
          	}
          }

      	
      });

    //console.log(this.items.prix);

  }

  ngOnInit () {

  	

  	

    

    /*this.http.post('http://151.80.145.1/RecupererPrixMarc.php', bodyJSON,{responseType: 'text'}).subscribe(
      data => console.log('data', data),
      err => console.log('error', err),
      () => {

      	this.monVendeurArray = JSON.parse(JSON.stringify(this.JsonReceiver.Vendeur));
   

      });*/
  	

  }

  AfficherPrixMarc() {

  	
  }


  AfficherVendeurPrix() {

  
  }

 

}
