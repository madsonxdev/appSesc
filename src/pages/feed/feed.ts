import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the FeedPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-feed',
  templateUrl: 'feed.html',
})
export class FeedPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  public somaDoisnumeros(num1: number, num2: number): void
  {
    //alert(num1+num2)
  }
  

  public nome_usuario:string = "MADSONX"; //Variavéis para usar nos html.

  ionViewDidLoad() 
  {
   // this.somaDoisnumeros(78,85);
    console.log('ionViewDidLoad FeedPage');
  }

}
