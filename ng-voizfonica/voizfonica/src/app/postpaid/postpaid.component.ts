<<<<<<< HEAD
import { ApiService } from "./../api.service";
import { Component, OnInit } from "@angular/core";
=======
import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
>>>>>>> 7b29146fdd06eb76ada71ea5de0e239789d116c4

@Component({
  selector: "app-postpaid",
  templateUrl: "./postpaid.component.html",
  styleUrls: ["./postpaid.component.css"]
})
export class PostpaidComponent implements OnInit {
  number: string;
  cus: any;
  arrayCall = [];
  arrayData = [];
  arraySms = [];
  constructor(private apiservice: ApiService) {
    this.number = this.apiservice.getNum();
    this.apiservice.checkIsCustomer(this.number).subscribe(data => {
      this.cus = data;
      console.log(this.cus);
      this.arrayCall = this.cus.callUsage.split(";");
      console.log(this.arrayCall);

<<<<<<< HEAD
      this.arrayData = this.cus.dataUsage.split(";");
      this.arraySms = this.cus.smsUsage.split(";");
    });
=======
  num='0';
  constructor(private apiService:ApiService) {this.num=this.apiService.getNum(); }

  ngOnInit() {
>>>>>>> 7b29146fdd06eb76ada71ea5de0e239789d116c4
  }

  ngOnInit() {}
}
