import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-addservice',
  templateUrl: './addservice.page.html',
  styleUrls: ['./addservice.page.scss'],
})
export class AddservicePage implements OnInit {

  constructor(private menuCtrl: MenuController, private sb: StatusBar, private router: Router) {
    this.menuCtrl.enable(true);
    this.sb.backgroundColorByHexString("#3880ff"); }
  ngOnInit() {
  }

  onclick(){
    this.router.navigateByUrl("/service-list/");
  }

}
