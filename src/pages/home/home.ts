import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NewsProvider } from '../../providers/news/news';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public testServicedata:any;
   searchQuery: string = '';
   items: string[];
  constructor(public navCtrl: NavController,public testService: NewsProvider) {

  }
  initializeItems() {
    this.testService.getRemoteData().subscribe(data => {
     debugger;
     this.testServicedata=data.articles;
     console.log(this.testServicedata);
   });;
 }

 getItems(ev: any) {
   // Reset items back to all of the items
   this.initializeItems();

   // set val to the value of the searchbar
   const val = ev.target.value;
    console.log(val);
   // if the value is an empty string don't filter the items
  if (val && val.trim() != '') {
     this.testServicedata = this.testServicedata.filter((item) => {
      console.log(item.author.toLowerCase());
      return (item.author.toLowerCase().indexOf(val.toLowerCase()) > -1);
     })
   }
 }
  ionViewDidLoad() {
    this.testService.getRemoteData().subscribe(data => {
      debugger;
      this.testServicedata=data.articles;
      console.log(this.testServicedata);
    });;
  }
}
