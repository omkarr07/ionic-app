import { Component, OnInit } from '@angular/core';
import { MenuController, NavController } from '@ionic/angular';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-societyc',
  templateUrl: './societyc.page.html',
  styleUrls: ['./societyc.page.scss'],
})
export class SocietycPage implements OnInit {

  constructor(private navctrl : NavController ,private menuCtrl: MenuController, private sb: StatusBar) {
    this.menuCtrl.enable(false);
    this.sb.backgroundColorByHexString("#3880ff");
  }
    
  ngOnInit() {
  }

}
