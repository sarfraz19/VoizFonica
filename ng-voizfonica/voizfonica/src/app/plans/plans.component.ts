import { ApiService } from "./../api.service";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-plans",
  templateUrl: "./plans.component.html",
  styleUrls: ["./plans.component.css"],
  providers: [ApiService]
})
export class PlansComponent implements OnInit {
  plans1 = [];
  plans2 = [];
  plans3 = [];
  number: string;
  type: string;
<<<<<<< HEAD
  var1: string;
=======
>>>>>>> 7b29146fdd06eb76ada71ea5de0e239789d116c4
  constructor(private api: ApiService) {
    // this.getPlans();
    this.number = this.api.getNum();
    this.type = this.api.getType();
    if (this.type == "") {
      this.getPostpaid();
      this.getPrepaid();
      this.getDongle();
    } else if (this.type == "Postpaid") {
      this.getPostpaid();
    } else if (this.type == "Prepaid") {
      this.getPrepaid();
    } else if (this.type == "Dongle") {
      this.getDongle();
    }
  }

<<<<<<< HEAD
  func(var1) {
    this.api.changeAmt(var1);
  }

  getPostpaid = () => {
    this.api.getPostpaid().subscribe(
      data => {
        this.plans1 = data;
        console.log(this.plans1);
      },
      error => {
        console.log(error);
      }
    );
  };

  getPrepaid = () => {
    this.api.getPrepaid().subscribe(
      data => {
        this.plans2 = data;
        console.log(this.plans2);
      },
      error => {
        console.log(error);
      }
    );
  };

  getDongle = () => {
    this.api.getDongle().subscribe(
      data => {
=======
  getPostpaid = () => {
    this.api.getPostpaid().subscribe(
      data => {
        this.plans1 = data;
        console.log(this.plans1);
      },
      error => {
        console.log(error);
      }
    );
  };

  getPrepaid = () => {
    this.api.getPrepaid().subscribe(
      data => {
        this.plans2 = data;
        console.log(this.plans2);
      },
      error => {
        console.log(error);
      }
    );
  };

  getDongle = () => {
    this.api.getDongle().subscribe(
      data => {
>>>>>>> 7b29146fdd06eb76ada71ea5de0e239789d116c4
        this.plans3 = data;
        console.log(this.plans3);
      },
      error => {
        console.log(error);
      }
    );
  };

  ngOnInit() {}
}