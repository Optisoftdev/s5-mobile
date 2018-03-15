import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {ChatPage} from "../chat/chat";


/**
 * Generated class for the HomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
chat(){
  this.navCtrl.push('ChatPage');
}
  chats(){
    this.navCtrl.push('SupportPage');
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }

}
