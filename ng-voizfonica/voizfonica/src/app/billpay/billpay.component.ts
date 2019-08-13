<<<<<<< HEAD
import { ApiService } from "./../api.service";
import { Component, OnInit } from "@angular/core";
=======
import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
>>>>>>> 7b29146fdd06eb76ada71ea5de0e239789d116c4

@Component({
  selector: "app-billpay",
  templateUrl: "./billpay.component.html",
  styleUrls: ["./billpay.component.css"]
})
export class BillpayComponent implements OnInit {
<<<<<<< HEAD
  bill = [];
  bill2: any;
  number: string;
  amt: string;
  phone: string;
  constructor(private apiservice: ApiService) {
    this.number = this.apiservice.getNum();
    this.apiservice.checkIsCustomer(this.number).subscribe(response => {
      this.bill = response.bill.split(";");
      this.bill2 = response.bill;
      console.log(this.bill);
      this.amt = this.bill[0].substring(68, 74);
      this.phone = this.bill[0].substring(1, 11);
    });
=======
  
  num='0';
  constructor(private apiService:ApiService) {this.num=this.apiService.getNum(); }
  

  ngOnInit() {
>>>>>>> 7b29146fdd06eb76ada71ea5de0e239789d116c4
  }
  func() {
    this.apiservice.changeAmt(this.amt);
    this.apiservice.changePage("billpay");
    console.log(this.apiservice.getPage());
  }
  ngOnInit() {}
}
