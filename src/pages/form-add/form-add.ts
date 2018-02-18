import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {AboutPage} from '../about/about';
import {FormProvider} from '../../providers/form/form';
import {ShareService} from '../../services/share/share';
import {BrowserModule} from '@angular/platform-browser';
import { HttpClient } from '@angular/common/http';


/**
 * Generated class for the FormAddPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-form-add',
  templateUrl: 'form-add.html',
  providers: [FormProvider]
})


export class FormAddPage {

	note: string;
	title: string;

	//title='';
  	//note='';
  	
  	

  constructor(public navCtrl: NavController, public navParams: NavParams, public formService:FormProvider, public shareService:ShareService, private http: HttpClient) {

  	
  }

  /*ionViewDidLoad() {
    console.log('ionViewDidLoad FormAddPage');
  }*/




  addItem() {
  	
  	var data: string;
  	
  	const body = {titre: this.title, description: this.note};
  	const bodyJSON = JSON.stringify(body);
  	//body ='ouech';
  	console.log(bodyJSON);

  	this.http.post('http://151.80.145.1/AjoutJeu.php', bodyJSON,{responseType: 'text'}).subscribe(
  		data => console.log('data', data),
  		err => console.log('error', err),
  		() => {});
  	
  	this.navCtrl.push(AboutPage, {
            param1: this.title, param2: this.note
        });

  	
  }

}
