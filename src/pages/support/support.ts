import {Component, ViewChild} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';


import {ChatBubble} from '../components/chatBubble/chatBubble';
/**
 * Generated class for the SupportPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
@Component({
  selector: 'page-support',
  templateUrl: 'support.html',

  queries: {
    txtChat: new ViewChild('txtChat'),
    content: new ViewChild('content')
  }
})


export class SupportPage {
  static get parameters() {
    return [[NavController], [NavParams]];
  }
  public messages ;

  constructor(nav , navParams) {
    this.messages = [
      {
        image: 'assets/imgs/parent.png',
        position: 'left',
        message: 'Hello from the other side.',
        senderName: 'Gregory',
        time: '28-Jun-2016 21:53'
      },
      {
        image: 'assets/imgs/parent.png',
        position: 'right',
        message: 'Hi! How are?',
        senderName: 'Me',
        time: '28-Jun-2016 21:55'
      },
      {
        image: 'assets/imgs/parent.png',
        position: 'left',
        message: "This is some really long test that I'm writing here. Let's see how it wraps.",
        senderName: 'Gregory',
        time: '28-Jun-2016 21:57'
      }
    ];
  }
}
