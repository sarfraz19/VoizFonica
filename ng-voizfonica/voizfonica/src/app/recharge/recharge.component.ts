import { ApiService } from "./../api.service";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-recharge",
  templateUrl: "./recharge.component.html",
  styleUrls: ["./recharge.component.css"]
})
export class RechargeComponent implements OnInit {
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
  }

  ngOnInit() {}
}
