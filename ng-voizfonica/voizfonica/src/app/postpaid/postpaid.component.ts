import { ApiService } from "./../api.service";
import { Component, OnInit } from "@angular/core";

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

      this.arrayData = this.cus.dataUsage.split(";");
      this.arraySms = this.cus.smsUsage.split(";");
    });
  }

  ngOnInit() {}
}
