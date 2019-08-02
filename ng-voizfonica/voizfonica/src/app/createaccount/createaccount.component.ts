import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-createaccount',
  templateUrl: './createaccount.component.html',
  styleUrls: ['./createaccount.component.css']
})
export class CreateaccountComponent implements OnInit {

  var1="hi";
  name1:string;
  phone_num1:string;
  pw1:string;
  retype_pw1:string;

  constructor() {}

  ngOnInit() {
  }

  save(){
    this.var1="hello";
  }

}
