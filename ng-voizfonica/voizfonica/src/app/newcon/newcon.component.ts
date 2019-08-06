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
  plans=["Plan1","Plan2","Plan3"];
  kycdate_var:Date;

  isBtnClicked=false;
  sub=false;

  date:Date;
  day:number;
  month:number;
  yr:number;


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
      var reg=new RegExp('^[a-zA-Z0-9]+([\\.-_][a-zA-Z0-9]+)*@[a-zA-Z0-9]+([\\.-_][a-zA-Z0-9]+)*\\.[a-zA-Z]{2,3}$');
      return reg.test(str);
    }
    return true;
  }

  selectnum_match(num):boolean
  {
    if(num!=null)
    {
      var str:string;
      str=num;
      var reg=new RegExp('^[0-9]{10}$');
      return reg.test(str);
    }
    return true;
  }

  kycdate_match(date):boolean
  {
    if(date!=null)
    {
      console.log(date);
      var str=date.split("-");
      var d:number;
      var m:number;
      var y:number;

      d=str[2];
      m=str[1];
      y=str[0];

      console.log(y,this.yr,m,this.month,d,this.day);
      if(y>this.yr)
        return true;
      else if(y==this.yr&&m>this.month)
        return true;
      else if(y==this.yr&&m==this.month&&d>this.day)    
        return true;
      else
        return false;
    }
    return true;
    
  }
  
  check_valid()
  {
    this.isBtnClicked=true;
    if(this.name_var!=null && this.name_var!=''
    && this.address_var!=null && this.address_var!=''
    && this.pincode_var!=null && this.pincode_var!=''
    && this.email_var!=null && this.email_var!=''
    && this.preposdon_var!=null && this.preposdon_var!=''
    && this.selectplan_var!=null && this.selectplan_var!=''
    && this.kycdate_var!=null
    && this.name_match(this.name_var)
    && this.pincode_match(this.pincode_var)
    && this.email_match(this.email_var)
    && this.selectnum_match(this.selectnum_var)
    && this.kycdate_match(this.kycdate_var))
      this.sub=true;
    else
      return false;
  }

  getDateTime()
  {
    this.date=new Date();
    this.day=this.date.getDate();
    this.month=this.date.getMonth()+1;
    this.yr=this.date.getFullYear();
    return true;
  }
}
