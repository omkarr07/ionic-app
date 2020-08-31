import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vpbill',
  templateUrl: './vpbill.page.html',
  styleUrls: ['./vpbill.page.scss'],
})
export class VpbillPage implements OnInit {
  summary : any;
  constructor() { }

  ngOnInit() {
  
  }

  buttonClicked: boolean = false; //Whatever you want to initialise it as

   onButtonClick() {

      this.buttonClicked = !this.buttonClicked;
  }

}
