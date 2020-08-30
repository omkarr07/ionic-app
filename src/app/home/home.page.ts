import { Component } from '@angular/core';
import { NavController, MenuController } from '@ionic/angular';
import { Router } from '@angular/router';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private navctrl : NavController, private router : Router,private menuCtrl: MenuController, private sb: StatusBar) {
    this.menuCtrl.enable(false);
    this.sb.backgroundColorByHexString("#3880ff");
  }
  
  register(){
    this.navctrl.navigateForward("demo2");
    
  }

}
