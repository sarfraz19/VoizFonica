import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-createaccount',
  templateUrl: './createaccount.component.html',
  styleUrls: ['./createaccount.component.css']
})
export class CreateaccountComponent implements OnInit {

  var1="hi";
  name:string;
  phone_num:string;
  pw:string;
  retype_pw:string;

  constructor() { }

  ngOnInit() {
  }

  save(){
    this.var1="hello";
  }

}
