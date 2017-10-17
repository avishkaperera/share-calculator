import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ViewProfitPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-view-profit',
  templateUrl: 'view-profit.html',
})
export class ViewProfitPage {

  sharePerPartner:number;
  shareOfCompany:number;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.sharePerPartner = this.navParams.get("share");
    this.shareOfCompany = this.navParams.get("company");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ViewProfitPage');
  }

}
