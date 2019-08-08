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
  constructor(private api: ApiService) {
    this.getPlans();
  }

  getPlans = () => {
    this.api.getPlans().subscribe(
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
