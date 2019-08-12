import { ApiService } from "./../api.service";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-plans",
  templateUrl: "./plans.component.html",
  styleUrls: ["./plans.component.css"],
  providers: [ApiService]
})
export class PlansComponent implements OnInit {
  plans = [];
  number: string;
  val: string;
  constructor(private api: ApiService) {
    // this.getPlans();
    this.number = this.api.getNum();
    this.api.checkIsCustomer(this.number).subscribe(data => {
      this.val = data.type1;
      console.log(this.val);
      if (this.val == "Postpaid") {
        this.getPostpaid();
        console.log("postpaid pack");
      } else if (this.val == "Prepaid") {
        this.getPrepaid();
        console.log("prepaid pack");
      } else {
        this.getDongle();
        console.log("dongle pack");
      }
    });
  }

  getPostpaid = () => {
    this.api.getPostpaid().subscribe(
      data => {
        this.plans = data;
        console.log(this.plans);
      },
      error => {
        console.log(error);
      }
    );
  };

  getPrepaid = () => {
    this.api.getPrepaid().subscribe(
      data => {
        this.plans = data;
        console.log(this.plans);
      },
      error => {
        console.log(error);
      }
    );
  };

  getDongle = () => {
    this.api.getDongle().subscribe(
      data => {
        this.plans = data;
        console.log(this.plans);
      },
      error => {
        console.log(error);
      }
    );
  };

  ngOnInit() {}
}
