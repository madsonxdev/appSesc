import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
/*
  Generated class for the MoovieProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class MoovieProvider
{

  private baseApiPatch = "https://api.themoviedb.org/3";

  constructor(public http: HttpClient)
  {
    console.log('Hello MoovieProvider Provider');
  }

  getPopularMovies(page = 1):Observable<any>
  {
    return this.http.get(this.baseApiPatch + "/movie/popular?api_key=9dbba01956707021bc59e4b08a49c560&language=pt-BR&page="+page)
  }

  getPopularMoviesDetalhes(filmeid):Observable<any>
  {
    return this.http.get(this.baseApiPatch + "/movie/popular?api_key=9dbba01956707021bc59e4b08a49c560&language=pt-BR")
  }

}
