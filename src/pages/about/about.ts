import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


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
})


export class AboutPage {
  selectedItem: any;
  icons: string[];
  items: Array<{title: string, note: string, icon: string}>;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    // If we navigated to this page, we will have an item available as a nav param
    this.selectedItem = navParams.get('item');

    // Let's populate this page with some filler content for funzies
    this.icons = ['Far Cry', 'FIFA 2018', 'Watch Dogs', 'Battlefield 4'];

    this.items = [];
    for (let i = 0; i < this.icons.length; i++) {
      this.items.push({
        title: this.icons[i],
        note: 'This is item #' + i,
        //icon: this.icons[Math.floor(Math.random() * this.icons.length)]
        icon: 'null'
      });
    }
  }

  itemTapped(event, item) {
    // That's right, we're pushing to ourselves!
    this.navCtrl.push(AboutPage, {
      item: item
    });
  }
}
