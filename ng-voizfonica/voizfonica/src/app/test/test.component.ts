import { ApiService } from "./../api.service";
import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-test",
  templateUrl: "./test.component.html",
  styleUrls: ["./test.component.css"]
})
export class TestComponent implements OnInit {
  inp: string = "its value";
  dateMessage: string;
  isCollapsed = true;
  data: string;
  userName: string = "";
  response: any;
  value: any;
  str: any;
  array = [];
  constructor(private http: HttpClient, private apiservice: ApiService) {
    // setInterval(() => {
    //   let curret = new Date();
    //   this.dateMessage = curret.toDateString() + " " + curret.toTimeString();
    // }, 1000);
    this.apiservice.getDetails().subscribe(value => {
      this.value = value;
      console.log(this.value);
      this.str = value[1].array_data;
      this.array = this.str.split(",");
    });
  }

  // collapseFunction() {
  //   this.isCollapsed = !this.isCollapsed;
  // }
  // search() {
  //   this.http
  //     .get("https://api.github.com/users/" + this.userName)
  //     .subscribe(response => {
  //       this.response = response;
  //       console.log(this.response);
  //     });
  // }
  ngOnInit() {}
}
