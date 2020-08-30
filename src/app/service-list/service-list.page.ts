import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-service-list',
  templateUrl: './service-list.page.html',
  styleUrls: ['./service-list.page.scss'],
})
export class ServiceListPage implements OnInit {

  constructor(private menuCtrl: MenuController, private sb: StatusBar, private router: Router) {
    this.menuCtrl.enable(true);
    this.sb.backgroundColorByHexString("#3880ff"); }
  ngOnInit() {
  }

  onnew(){
    this.router.navigateByUrl("/service-list/addservice");
  }
}
