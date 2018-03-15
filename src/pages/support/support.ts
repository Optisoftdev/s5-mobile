import {Component, ViewChild} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';


import {ChatBubble} from '../components/chatBubble/ch';
/**
 * Generated class for the SupportPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
@Component({
  selector: 'page-support',
  templateUrl: 'support.html',
  directives: any[ ChatBubble ],
  queries: {
    txtChat: new ViewChild('txtChat'),
    content: new ViewChild('content')
  }
})


export class SupportPage {
  static get parameters() {
    return [[NavController], [NavParams]];
  }
  public messages;
  public username;
  public message;
  constructor(nav, navParams) {
    this.nav = nav;
    this.navParams = navParams;

    this.contactName = this.navParams.get('contactName');

    this.messages = [
      {
        img: 'build/img/hugh.png',
        position: 'left',
        content: 'Hello from the other side.',
        senderName: 'Gregory',
        time: '28-Jun-2016 21:53'
      },
      {
        img: 'build/img/hugh.png',
        position: 'right',
        content: 'Hi! How are?',
        senderName: 'Me',
        time: '28-Jun-2016 21:55'
      },
      {
        img: 'build/img/hugh.png',
        position: 'left',
        content: "This is some really long test that I'm writing here. Let's see how it wraps.",
        senderName: 'Gregory',
        time: '28-Jun-2016 21:57'
      }
    ];
  }

  sendMessage(){
    this.txtChat.setFocus();

    this.messages.push({
      img: 'build/img/hugh.png',
      position: 'right',
      content: this.txtChat.content,
      senderName: 'Me',
      time: new Date().toLocaleTimeString()
    });

    this.txtChat.clearInput();

    setTimeout(() => {
      this.content.scrollToBottom(300);//300ms animation speed
    });
  }
}
