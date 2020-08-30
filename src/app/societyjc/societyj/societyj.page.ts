import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController, NavController } from '@ionic/angular';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-societyj',
  templateUrl: './societyj.page.html',
  styleUrls: ['./societyj.page.scss'],
})
export class SocietyjPage implements OnInit {

  constructor(private navctrl : NavController ,private menuCtrl: MenuController, private sb: StatusBar) {
    this.menuCtrl.enable(false);
    this.sb.backgroundColorByHexString("#3880ff");
  }
  ngOnInit() {
  }

  onsubmit(){
    this.navctrl.navigateForward("/societyjc/societyj/memberdetails");
  }
}
