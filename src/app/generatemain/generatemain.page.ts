import { Component, OnInit } from '@angular/core';
import { DatePicker } from '@ionic-native/date-picker/ngx';

import { MenuController, NavController } from '@ionic/angular';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-generatemain',
  templateUrl: './generatemain.page.html',
  styleUrls: ['./generatemain.page.scss'],
})
export class GeneratemainPage implements OnInit {
  mydate:string;
  mydatem:string;
  myDate:string;
  dd:string;
  penalty: any = false;
  constructor(private nav: NavController,private datePicker : DatePicker, private menuCtrl: MenuController,private sb:StatusBar) { 
    this.sb.backgroundColorByHexString("#3880ff");
    this.menuCtrl.enable(true);}
  
  

  ngOnInit() {  }

  dates(){
    
    this.datePicker.show({
      date: new Date(),
      mode: 'date',
      
      androidTheme: this.datePicker.ANDROID_THEMES.THEME_HOLO_LIGHT
    }).then(
      date =>{
        this.mydate = date.getDate()+"/"+date.getMonth()+"/"+date.getFullYear();
      },
      err => console.log('Error occurred while getting date: ', err)
    );
  }  

  datesm(){
    this.datePicker.show({
      date: new Date(),
      mode: 'date',
      todayText:"Set Today",
      androidTheme: this.datePicker.ANDROID_THEMES.THEME_DEVICE_DEFAULT_LIGHT
    }).then(
      date =>{
        this.mydatem = date.getDate()+"/"+date.toLocaleString('default', { month: 'long' })+"/"+date.getFullYear();
      },
      err => console.log('Error occurred while getting date: ', err)
    );
  }

  dateo(){
    this.datePicker.show({
      date: new Date(),
      mode: 'date',
      
      androidTheme: this.datePicker.ANDROID_THEMES.THEME_DEVICE_DEFAULT_LIGHT
    }).then(
      date =>{
        this.myDate = date.getDate()+"/"+date.getMonth()+"/"+date.getFullYear();
      },
      err => console.log('Error occurred while getting date: ', err)
    );
  }

  ddate(){
    this.datePicker.show({
      date: new Date(),
      mode: 'date',
      
      androidTheme: this.datePicker.ANDROID_THEMES.THEME_DEVICE_DEFAULT_LIGHT
    }).then(
      date =>{
        this.dd = date.getDate()+"/"+date.getMonth()+"/"+date.getFullYear();
      },
      err => console.log('Error occurred while getting date: ', err)
    );
  }

  
 /*  enablePenalty(){
    this.penalty = true;
    if (this.penalty){
      this.penalty = false;
    }else{
      this.penalty = true;
    }
  } */

}
