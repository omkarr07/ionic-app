import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-complaints',
  templateUrl: './complaints.page.html',
  styleUrls: ['./complaints.page.scss'],
})
export class ComplaintsPage implements OnInit {
  
  items : any[];

  constructor(private menuController: MenuController, private sb: StatusBar) {
    this.menuController.enable(true);
    this.sb.backgroundColorByHexString("#3880ff");
    
   }
  
  ngOnInit() {
  }
 

  

 

  reset(form : NgForm){
    form.resetForm();
  }

}
