import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PerfilPage } from '../perfil/perfil';
import { FixPage } from '../fix/fix';
import { AboutPage } from '../about/about';

/**
 * Generated class for the ConfigPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-config',
  templateUrl: 'config.html',
})


export class ConfigPage {

  rootPage = 'PerfilPage';

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ConfigPage');
  }

  abrirPerfil(){
    this.navCtrl.push(PerfilPage);
  }

  abrirSobre(){
    this.navCtrl.push(AboutPage);
  }

}
