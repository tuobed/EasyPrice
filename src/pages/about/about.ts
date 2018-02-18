import { Component, OnInit} from '@angular/core';
import {FormAddPage} from '../form-add/form-add';
import {InfoJeuPage} from '../info-jeu/info-jeu';
import {IonicPage, NavController, NavParams } from 'ionic-angular';
import {FormProvider} from '../../providers/form/form';
import { HttpClient } from '@angular/common/http';

/**
 * Generated class for the AboutPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-about',
  templateUrl: 'about.html',
  providers: [FormProvider]
})


export class AboutPage implements OnInit{
  
  selectedItem: any;
  
  serviceData:string;
  JsonReceiver: any;
  temp: string;
  parameter1: string;
  titleGame: string;
  parameter2: string;
  parameter3: string;
  username: string;
  var1: string;
  var2: string;
  var3: string;
  items: Array<{title: string, note: string, icon: string}>;

  constructor(public navCtrl: NavController, public navParams: NavParams, public formService:FormProvider, private http: HttpClient) {
    // If we navigated to this page, we will have an item available as a nav param

    if(navParams.get('utilisateur')!=null) {
          this.username = navParams.get('utilisateur');
          
      }

    	
    	

        
  
  }

   ngOnInit () {

    var data: Object;
    var monGameArray = [];



    console.log(this.username);

       this.http.get('http://151.80.145.1/AfficherJeu.php').subscribe(
      data => {this.JsonReceiver = data},
      err => console.log('error', err),
      () => {
          //this.temp = JSON.stringify(this.restJsonReceiver.Jeux1);
          //this.struct = JSON.getItems(this.restJsonReceiver);
          //this.var1 =  this.restJsonReceiver[1];
          //this.var2 =  this.restJsonReceiver.Jeux1;
          //this.var3 =  this.restJsonReceiver.Jeux2;
            //ssconsole.log(this.JsonReceiver);
            //console.log(JSON.stringify(this.JsonReceiver.Games));
            monGameArray = JSON.parse(JSON.stringify(this.JsonReceiver.Games));
            

            /*for(let j = 0; j< this.monGameArray.length; j++) {
              console.log(this.monGameArray[0]);
              this.icons[j] = this.monGameArray[j];
            }*/

          //this.icons = ['Far Cry', 'FIFA 2018', 'Watch Dogs', 'Battlefield 4', this.var1, this.var2, this.var3];

  
          this.items = [];
          for (let i = 0; i < monGameArray.length; i++) {
            this.items.push({
              title: monGameArray[i],
              note: 'This is item #' + i,
              //icon: this.icons[Math.floor(Math.random() * this.icons.length)]
              icon: 'null'
            });
          }
  
      });

	 /*this.selectedItem = this.navParams.get('item');
	 this.icons = this.formService.icons;
	 this.items = this.formService.getItems();
	 console.log(this.items + ' about');*/
  }

  itemTapped(titleGame2) {
    console.log(titleGame2);
    // That's right, we're pushing to ourselves!
    this.navCtrl.push(InfoJeuPage, {
      nom: titleGame2, utilisateur:this.username
    });
  }

  removeItem(titleGame){
 
    //removeItemProvider(item);
    console.log(titleGame);
    const body = {titre: titleGame};
    console.log(body);
    const bodyJSON = JSON.stringify(body);

    this.http.post('http://151.80.145.1/SupprimerJeu.php', bodyJSON,{responseType: 'text'}).subscribe(
      data => console.log('data', data),
      err => console.log('error', err),
      () => {});


    /*for(let i = 0; i < this.items.length; i++) {
 
      if(this.items[i] == titleGame){
        this.items.splice(i, 1);
      }
    }
    */
      this.navCtrl.push(AboutPage);
 
    
 
  }


  /*addNewItem() {
  		//this.formService.addItemProvider(this.parameter1,this.parameter2,this.parameter3);
      this.items.push({
      title : this.parameter1,
      note : this.parameter2,
    
    });
  }*/

 

 onClick() {
 	this.navCtrl.push(FormAddPage);
 	console.log(this.items + ' provider');

 }

 
/*AfficherJeux() {
  this.http.post('http://151.80.145.1/AfficherJeu.php', null,{responseType: 'text'}).subscribe(
      data => console.log('data', data),
      err => console.log('error', err),
      () => {});
}*/
 



}
