import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-newcon',
  templateUrl: './newcon.component.html',
  styleUrls: ['./newcon.component.css']
})
export class NewconComponent implements OnInit {

  name_var:string;
  address_var:string;
  pincode_var:string;
  email_var:string;
  selectnum_var:string;
  preposdon_var:string;
  options=["Prepaid","Postpaid","Dongle"];
  selectplan_var:string;
  kycdate_var:string;

  constructor() { }

  ngOnInit() {
  }

  name_match(str):boolean
  {
    if(str!=null && str!='')
    {
      str=str.trim();
      var reg=new RegExp('^[a-zA-Z\ ]+$');
      return reg.test(str);
    }
    return true;
  }

  pincode_match(num):boolean
  {
    if(num!=null)
    {
      var str:string;
      str=num;
      var reg=new RegExp('^[0-9]{6}$');
      return reg.test(str);
    }
    return true;
  }

  email_match(str):boolean
  {
    if(str!=null && str!='')
    {
      str=str.trim();
      var reg=new RegExp('^[a-zA-Z0-9]+([\.-_][a-zA-Z0-9]+)*@[a-zA-Z0-9]+([\.-_][a-zA-Z0-9]+)*\.[a-zA-Z]{2,3}$');
      return reg.test(str);
    }
    return true;
  }
  
}
