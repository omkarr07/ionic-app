import { Component, OnInit } from '@angular/core';
import { NavController, MenuController } from '@ionic/angular';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-postnotices',
  templateUrl: './postnotices.page.html',
  styleUrls: ['./postnotices.page.scss'],
})
export class PostnoticesPage implements OnInit {

  constructor(private menuCtrl: MenuController, private sb: StatusBar) {
    this.menuCtrl.enable(true);
    this.sb.backgroundColorByHexString("#3880ff"); }

  ngOnInit() {
  }

}
