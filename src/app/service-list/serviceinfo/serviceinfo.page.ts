import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Router } from '@angular/router';

@Component({
  selector: 'app-serviceinfo',
  templateUrl: './serviceinfo.page.html',
  styleUrls: ['./serviceinfo.page.scss'],
})
export class ServiceinfoPage implements OnInit {

  constructor(private menuCtrl: MenuController, private sb: StatusBar, private router: Router) {
    this.menuCtrl.enable(true);
    this.sb.backgroundColorByHexString("#3880ff"); }

  ngOnInit() {
  }

}
