import { Component, OnInit } from '@angular/core';
import { MenuController, NavController } from '@ionic/angular';
import { Router } from '@angular/router';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-memberdashboard',
  templateUrl: './memberdashboard.page.html',
  styleUrls: ['./memberdashboard.page.scss'],
})
export class MemberdashboardPage implements OnInit {

  constructor( private menuController: MenuController, private route : Router,private sb: StatusBar, private nav: NavController) {
    this.menuController.enable(true);
    this.sb.backgroundColorByHexString("#004d99");

   }
  ngOnInit() {
    this.sb.backgroundColorByHexString("#004d99");
    this.nav.navigateRoot("/dashboard/memberdashboard");
  }

  comp(){
    this.route.navigateByUrl("/complaints");
  }

}
