import { ApiService } from "./../api.service";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-pay",
  templateUrl: "./pay.component.html",
  styleUrls: ["./pay.component.css"]
})
export class PayComponent implements OnInit {
  amt: string;
  page: string;
  number: string;
  bill: any;
  det: any;

  constructor(private api: ApiService) {
    this.api.changePage("0");
    this.amt = this.api.getAmt();
    console.log(this.amt);
    this.page = this.api.getPage();
    console.log(this.page);
  }

  change() {
    if (this.page == "billpay") {
      this.number = this.api.getNum();
      this.api.checkIsCustomer(this.number).subscribe(response => {
        this.bill = response.bill;
        this.det = response;
        this.bill = this.bill.substring(0, 77) + "p" + this.bill.substring(78);
        this.api
          .updateCustomersBill(this.det, this.bill)
          .subscribe(res => console.log(res));
        // console.log(this.bill);
      });
    }
  }
  ngOnInit() {}
}
