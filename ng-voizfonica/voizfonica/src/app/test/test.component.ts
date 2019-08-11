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
  constructor(private http: HttpClient) {
    setInterval(() => {
      let curret = new Date();
      this.dateMessage = curret.toDateString() + " " + curret.toTimeString();
    }, 1000);
  }

  collapseFunction() {
    this.isCollapsed = !this.isCollapsed;
  }
  search() {
    this.http
      .get("https://api.github.com/users/" + this.userName)
      .subscribe(response => {
        this.response = response;
        console.log(this.response);
      });
  }
  ngOnInit() {}
}
