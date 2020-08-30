import { Component, OnInit } from '@angular/core';
import { MenuController, NavController } from '@ionic/angular';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-societyjc',
  templateUrl: './societyjc.page.html',
  styleUrls: ['./societyjc.page.scss'],
})
export class SocietyjcPage implements OnInit {

  constructor(private navctrl : NavController ,private menuCtrl: MenuController, private sb: StatusBar) {
    this.menuCtrl.enable(false);
    this.sb.backgroundColorByHexString("#3880ff");
  }

  ngOnInit() {
  }

}
