import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-memberdetails',
  templateUrl: './memberdetails.page.html',
  styleUrls: ['./memberdetails.page.scss'],
})
export class MemberdetailsPage implements OnInit {

  constructor(private menuCtrl: MenuController,private sb:StatusBar) {
    this.sb.backgroundColorByHexString("#3880ff");
    this.menuCtrl.enable(false);}
  ngOnInit() {
  }

}
