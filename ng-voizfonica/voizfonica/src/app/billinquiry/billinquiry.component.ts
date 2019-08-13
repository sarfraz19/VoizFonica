<<<<<<< HEAD
import { ApiService } from "./../api.service";
import { Component, OnInit } from "@angular/core";
=======
import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
>>>>>>> 7b29146fdd06eb76ada71ea5de0e239789d116c4

@Component({
  selector: "app-billinquiry",
  templateUrl: "./billinquiry.component.html",
  styleUrls: ["./billinquiry.component.css"]
})
export class BillinquiryComponent implements OnInit {
<<<<<<< HEAD
  bill_details: any[];
  bill: any;
  var1: string;
  var2: string;
  number: string;
  result: any;
  pay: string;
  det: any;
  constructor(private apiservice: ApiService) {
    this.number = this.apiservice.getNum();
    this.apiservice.checkIsCustomer(this.number).subscribe(response => {
      this.bill = response.bill.split(";");
      this.det = response;
      console.log(this.bill[0]);
      console.log(this.bill[0].substring(77, 78));
    });
  }
=======
bill_details:any[];

num='0';
constructor(private apiService:ApiService) {this.num=this.apiService.getNum(); }
>>>>>>> 7b29146fdd06eb76ada71ea5de0e239789d116c4

  ngOnInit() {
    /*comment1*/
  }

  func(var1) {
    console.log("this is function");
    console.log(var1);
    this.result = this.bill[var1];
    console.log(this.bill[var1]);
    this.apiservice.changePage("billinquiry");
  }
  paymentVar(var2) {
    this.apiservice.changeAmt(var2);
    console.log(var2);
  }

  // fn() {
  //   this.bill_details = [
  //     {
  //       left: "VoizFonica Number",
  //       right: this.bill.substring(1, 11)
  //     },
  //     {
  //       left: "Bill Number",
  //       right: this.bill.substring(12, 20)
  //     },
  //     {
  //       left: "Bill Date",
  //       right: this.bill.substring(21, 31)
  //     },
  //     {
  //       left: "Bill period",
  //       right: this.bill.substring(32, 56)
  //     },
  //     {
  //       left: "Pay by Date",
  //       right: this.bill.substring(57, 67)
  //     },
  //     {
  //       left: "Bill Amount",
  //       right: this.bill.substring(68, 74)
  //     },

  //   ];
  // }
}
