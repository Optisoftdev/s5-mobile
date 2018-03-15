import { Component } from '@angular/core';

@Component({
  selector: 'chat-bubble',
  inputs: ['msg: message'],
  template:
  `
  <div class="chatBubble">
    <div class="chat-bubble {{msg.sender}}">
      <div class="message">{{msg.message}}</div>
      <div class="message-detail">
          <span style="font-weight:bold;">{{msg.username}} </span>,
          <span class="bdate">{{msg.created_at}}</span>
      </div>
    </div>
  </div>
  `
})
export class ChatBubble {
  public msg;
  constructor() {

  }
}
