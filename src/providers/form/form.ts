import { Injectable } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {AboutPage} from '../../pages/about/about';
import { HttpClient } from '@angular/common/http';

/*
  Generated class for the FormProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class FormProvider {

	
	icons: string[];
  parameter1: string;
  parameter2: string;
  parameter3: string;
  items: Array<{title: string, note: string, icon: string}>;

  	//let navCtrl = this.app.getActiveNav();

  


  constructor(private http: HttpClient) {



      
    


  

    // Let's populate this page with some filler content for funzies
    /*console.log(this.items + ' provider');
    this.icons = ['Far Cry', 'FIFA 2018', 'Watch Dogs', 'Battlefield 4', this.parameter1, this.parameter2, this.parameter3];

	
    this.items = [];
    for (let i = 0; i < this.icons.length; i++) {
      this.items.push({
        title: this.icons[i],
        note: 'This is item #' + i,
        //icon: this.icons[Math.floor(Math.random() * this.icons.length)]
        icon: 'null'
      });
    }*/
    

  }


  /*initialisationCatalogue() {

    this.http.get('http://151.80.145.1/AfficherJeu.php').subscribe(
      data => {this.restJsonReceiver = data},
      err => console.log('error', err),
      () => {
          //this.temp = JSON.stringify(this.restJsonReceiver.Jeux1);
          //console.log(this.temp);
          this.parameter1 =  JSON.stringify(this.restJsonReceiver.Jeux0);
          this.parameter2 =  JSON.stringify(this.restJsonReceiver.Jeux1);
          this.parameter3 =  JSON.stringify(this.restJsonReceiver.Jeux2);

          this.icons = ['Far Cry', 'FIFA 2018', 'Watch Dogs', 'Battlefield 4', this.parameter1, this.parameter2, this.parameter3];

  
          this.items = [];
          for (let i = 0; i < this.icons.length; i++) {
            this.items.push({
              title: this.icons[i],
              note: 'This is item #' + i,
              //icon: this.icons[Math.floor(Math.random() * this.icons.length)]
              icon: 'null'
            });
          }
  
      });
  }*/




  removeItemProvider(item){
 
    for(let i = 0; i < this.items.length; i++) {
 
      if(this.items[i] == item){
        this.items.splice(i, 1);
      }
 
    }
    console.log(this.items + ' provider');
 
  }

  addItemProvider(titleVar, noteVar, iconVar) {
  	console.log(titleVar);
  	this.items.push({
      title : titleVar,
      note : noteVar,
      icon : iconVar
   });


  	//console.log(this.items + ' provider');
  	//this.navCtrl.push(AboutPage);

  }

  getItems() {
  	return this.items;
  }


  setTryItems(items) {

        this.items = items;
        console.log(this.items);
              
  }
 


 

}
