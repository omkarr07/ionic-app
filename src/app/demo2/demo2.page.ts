import { Component, OnInit } from '@angular/core';
import { NavController, MenuController } from '@ionic/angular';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-demo2',
  templateUrl: './demo2.page.html',
  styleUrls: ['./demo2.page.scss'],
})
export class Demo2Page implements OnInit {

  constructor(private navctrl : NavController ,private menuCtrl: MenuController, private sb: StatusBar) {
    this.menuCtrl.enable(false);
    this.sb.backgroundColorByHexString("#3880ff");
  }


  ngOnInit() {
  }
 signr(){
   this.navctrl.navigateBack("home");
 }
}
