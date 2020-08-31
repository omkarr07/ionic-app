import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { FormGroup, FormArray, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-memberdetails',
  templateUrl: './memberdetails.page.html',
  styleUrls: ['./memberdetails.page.scss'],
})
export class MemberdetailsPage implements OnInit {
 
  constructor(private menuCtrl: MenuController,private sb:StatusBar,private fb:FormBuilder) {
    this.sb.backgroundColorByHexString("#3880ff");
    this.menuCtrl.enable(false);
   
    this.productForm = this.fb.group({
      name: '',
      quantities: this.fb.array([]) ,
    });
  
  }
  ngOnInit() {
  }
 
  
  
  productForm: FormGroup;
  
  quantities() : FormArray {
    return this.productForm.get("quantities") as FormArray
  }
   
  newQuantity(): FormGroup {
    return this.fb.group({
      qty: '',
      vno: '',
    })
  }
   
  addQuantity() {
    this.quantities().push(this.newQuantity());
  }
   
  removeQuantity(i:number) {
    this.quantities().removeAt(i);
  }
   
 


}
