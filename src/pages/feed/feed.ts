import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { MoovieProvider } from '../../providers/moovie/moovie';
import { FilmeDetalhesPage } from '../filme-detalhes/filme-detalhes';

/**
 * Generated class for the FeedPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-feed',
  templateUrl: 'feed.html'
})
export class FeedPage
{
  public lista_filmes = new Array<any>();
  public loader;
  public refresher;
  public isRefreshing:boolean=false;
  public infiniteScroll;
  public page = 1;


  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public movieProvider: MoovieProvider,
    public loadingCtrl: LoadingController
    )  {

  }  

  public objeto_feed =
    {
      titulo: "Xbox One S",
      date: "Julho 2018",
      descricao: "Criando o App do Xbox",
      likes: 1,
      comentarios: 3,
      time_coment: "12h atras!",
    }

  public nome_usuario: string = "MADSONX"; //Variavéis para usar nos html.

  abreLoading() {
    this.loader = this.loadingCtrl.create({
      content: "Aguarde...",
    });
    this.loader.present();
  }
  fechaLoading() {
    this.loader.dismiss();
  }  

  doRefresh(refresher) {
    this.refresher = refresher;
    this.isRefreshing = true;
    this.carregaFilmes();
  }

  ionViewDidEnter() 
  {
    this,this.carregaFilmes();
  }

  abrirDetalhes(filme){
    console.log(filme);
    this.navCtrl.push('FilmeDetalhesPage',{id: filme.id});
    
  }

  doInfinite(infiniteScroll) {
    this.page++;
    this.infiniteScroll=infiniteScroll;
    this.carregaFilmes(true);
    }

  carregaFilmes(newpage:boolean = false){
    this.abreLoading();
    this.movieProvider.getPopularMovies(this.page).subscribe(
      data => {  
          if (newpage) 
          {
            this.lista_filmes =  this.lista_filmes.concat(data.results);
            this.infiniteScroll.complete();
          }    
          else
          {
            this.lista_filmes = data.results;
          }
          this.fechaLoading(); 
          if (this.isRefreshing) {
            this.refresher.complete();
            this.isRefreshing = false;
          }
      }, error => {
        console.log(error);
        this.fechaLoading();
        if (this.isRefreshing) {
          this.refresher.complete();
          this.isRefreshing = false;
        }
      }

    );
  }

}
