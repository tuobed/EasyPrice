import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import {HttpClientModule} from '@angular/common/http';


import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { AboutPage } from '../pages/about/about';
import { TaxesPage } from '../pages/taxes/taxes';
import { FormAddPage } from '../pages/form-add/form-add';
import { FormProvider } from '../providers/form/form';
import { ShareService } from '../services/share/share';
import { InfoJeuPage } from '../pages/info-jeu/info-jeu';

import { OneSignal } from '@ionic-native/onesignal';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    AboutPage,
    TaxesPage,
    FormAddPage,
    InfoJeuPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    AboutPage,
    TaxesPage,
    FormAddPage,
    InfoJeuPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    FormProvider,
    ShareService,
    OneSignal,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
