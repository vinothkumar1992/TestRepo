import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map'
/*
  Generated class for the NewsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class NewsProvider {
  constructor(public http: Http) {
    console.log('Hello12345 TestProvider Provider');

  } 
  getRemoteData() {
    return this.http.get("https://newsapi.org/v2/everything?q=bitcoin&from=2018-09-15&sortBy=publishedAt&apiKey=f6bfa3ba4daa469390fc8ceeed827332").map(res => res.json());

  }
}
