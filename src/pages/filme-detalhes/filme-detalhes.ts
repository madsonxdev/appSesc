import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MoovieProvider } from '../../providers/moovie/moovie';
import { _iterableDiffersFactory } from '../../../node_modules/@angular/core/src/application_module';

/**
 * Generated class for the FilmeDetalhesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-filme-detalhes',
  templateUrl: 'filme-detalhes.html',
  providers: [MoovieProvider]
})
export class FilmeDetalhesPage {

  public filme;
  public filmeid;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public movieProvider: MoovieProvider
    ) {
  }

  ionViewDidEnter() {
  this.filme = this.navParams.get("filme"); 

  /**this.movieProvider.getPopularMoviesDetalhes(this.filmeid).subscribe(data=>
    {
       this.filme= data.results;
      
      let retorno = (data as any);
    this.filme=JSON.parse(retorno);
    })
  */
 }
  

}
