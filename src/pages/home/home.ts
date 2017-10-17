import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {ViewProfitPage} from '../view-profit/view-profit'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  revenue:number;

  constructor(public navCtrl: NavController) {

  }

  calculate(){
    let shareOfCompany = this.revenue * 0.1;
    let shareOfPartners = this.revenue * 0.9;
    let shareOfPartner = shareOfPartners/5;
    this.navCtrl.push(ViewProfitPage,{share:shareOfPartner,company:shareOfCompany});
  }
}
