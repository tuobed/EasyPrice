import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { AboutPage } from '../pages/about/about';
import { TaxesPage } from '../pages/taxes/taxes';
import {InfoJeuPage} from '../pages/info-jeu/info-jeu';
import {FormAddPage} from '../pages/form-add/form-add';
import {FormProvider} from '../providers/form/form';

import { OneSignal } from '@ionic-native/onesignal';



@Component({
  templateUrl: 'app.html'
})

export class MyApp {
@ViewChild(Nav) nav: Nav;
  rootPage:any = HomePage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen, private oneSignal: OneSignal) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Accueil', component: HomePage },
      { title: 'Catalogue', component: AboutPage },
      { title: 'Calcule de commissions', component: TaxesPage }
    ];


    this.oneSignal.startInit('44d9b5e2-d523-48f7-9c8a-4c68ebb7df57', '914889699420');

    this.oneSignal.inFocusDisplaying(this.oneSignal.OSInFocusDisplayOption.InAppAlert);

    this.oneSignal.handleNotificationReceived().subscribe(() => {
      // do something when notification is received
    });

    this.oneSignal.handleNotificationOpened().subscribe(() => {
      // do something when a notification is opened
    });

this.oneSignal.endInit();

  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}

  
