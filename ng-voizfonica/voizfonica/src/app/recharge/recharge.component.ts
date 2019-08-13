<<<<<<< HEAD
import { ApiService } from "./../api.service";
import { Component, OnInit } from "@angular/core";
=======
import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
>>>>>>> 7b29146fdd06eb76ada71ea5de0e239789d116c4

@Component({
  selector: "app-recharge",
  templateUrl: "./recharge.component.html",
  styleUrls: ["./recharge.component.css"]
})
export class RechargeComponent implements OnInit {
<<<<<<< HEAD
  number: string;
  bill: any;
  amount: number;
  constructor(private apiservice: ApiService) {
    this.number = this.apiservice.getNum();
    this.apiservice.checkIsCustomer(this.number).subscribe(response => {
      this.bill = response;
      console.log(this.bill);
      this.number = this.bill.phone_num;
    });
  }
  func() {
    this.apiservice.changeAmt(this.amount);
    console.log(this.amount);
=======

  num='0';
  constructor(private apiService:ApiService) {this.num=this.apiService.getNum(); }

  ngOnInit() {
>>>>>>> 7b29146fdd06eb76ada71ea5de0e239789d116c4
  }

  ngOnInit() {}
}
