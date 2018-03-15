import { Component, ViewChild } from '@angular/core';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { TranslateService } from '@ngx-translate/core';
import { Config, Nav, Platform } from 'ionic-angular';

import { FirstRunPage } from '../pages/pages';
import { HomePage } from '../pages/home/home';
import { ChatPage } from '../pages/chat/chat';
//import {SupportPage} from "../pages/support/support";
import { Settings } from '../providers/providers';
import { WelcomePage } from '../pages/welcome/welcome';
import { TabsPage } from '../pages/tabs/tabs';


@Component({
  template: `<ion-menu [content]="content">
    <ion-header>
      <div header-background-image padding >
        <img src="assets/imgs/logo.png" >

        <h5>Manage Schools on the go</h5>
      </div>
    </ion-header>

    <ion-content>
      <ion-list >
        <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">
          <ion-icon class="md" [name]="p.name"></ion-icon>{{p.title}}
        </button>
      </ion-list>

    </ion-content>
    <ion-footer class="bottom">
    <button menuClose ion-button color="sucess" full="" (click)="support()">
        <ion-icon class="md" padding name="log-out"></ion-icon> Support
      </button>

      <button menuClose ion-button color="primary" full="" (click)="login()">
        <ion-icon class="md" padding name="log-in"></ion-icon> Sign In/ Sign Up
      </button>
      <button menuClose ion-button color="danger" full="" (click)="logout()">
        <ion-icon class="md" padding name="log-out"></ion-icon> Log Out
      </button>
    </ion-footer>

  </ion-menu>
  <ion-nav #content [root]="rootPage"></ion-nav>`
})
export class MyApp {
  rootPage = WelcomePage;

  @ViewChild(Nav) nav: Nav;

  pages: any[] = [




    { title: 'Chats', component: 'ChatPage',name:"chatboxes" },
    { title: 'Login', component: 'LoginPage',name:"log-in" },
    { title: 'Signup', component: 'SignupPage',name:"log-out" },

    { title: 'Menu', component: 'MenuPage',name:"menu" },

    { title: 'home', component: 'TabsPage',name:"home" }
  ]



  constructor(private translate: TranslateService, platform: Platform, settings: Settings, private config: Config, private statusBar: StatusBar, private splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
    this.initTranslate();
  }

  initTranslate() {
    // Set the default language for translation strings, and the current language.
    this.translate.setDefaultLang('en');
    const browserLang = this.translate.getBrowserLang();

    if (browserLang) {
      if (browserLang === 'zh') {
        const browserCultureLang = this.translate.getBrowserCultureLang();

        if (browserCultureLang.match(/-CN|CHS|Hans/i)) {
          this.translate.use('zh-cmn-Hans');
        } else if (browserCultureLang.match(/-TW|CHT|Hant/i)) {
          this.translate.use('zh-cmn-Hant');
        }
      } else {
        this.translate.use(this.translate.getBrowserLang());
      }
    } else {
      this.translate.use('en'); // Set your language here
    }

    this.translate.get(['BACK_BUTTON_TEXT']).subscribe(values => {
      this.config.set('ios', 'backButtonText', values.BACK_BUTTON_TEXT);
    });
  }
  //support(){
    //this.nav.setRoot(SupportPage);
  //}
logout(){
  this.nav.setRoot(WelcomePage);
}
  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
