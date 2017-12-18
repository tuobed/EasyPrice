import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import {AboutPage} from '../about/about';
import { NavController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})



export class HomePage {

	aboutPage = AboutPage;
	


	constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {

	
    }


}
