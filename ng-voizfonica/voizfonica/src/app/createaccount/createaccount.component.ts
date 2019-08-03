import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-createaccount',
  templateUrl: './createaccount.component.html',
  styleUrls: ['./createaccount.component.css']
})
export class CreateaccountComponent implements OnInit {

  var1="hi";
  isBtnClicked=false;

  name_var:string;
  phone_num_var:string;
  pw_var:string;
  retype_pw_var:string;

  constructor() {}

  ngOnInit() {
  }

  save(){
    this.var1="hello";
  }

  name_match(str):boolean
  {
    if(str!=null && str!='')
    {
      str=str.trim()
      var reg=new RegExp('^[a-zA-Z\ ]+$');
      var name_val=reg.test(str); 
      return name_val;
    }
    return true;
  }

  phone_num_match(num):boolean
  {
    if(num!=null)
    {
      var str:string;
      str=num;
      var reg=new RegExp('^[0-9]{10}$');
      var phone_num_val=reg.test(str); 
      return phone_num_val;
    }
    return true;
  }

  regForm_valid():boolean
  {
    if(this.name_var!=null && this.name_var!=''
    && this.phone_num_var!=null && this.phone_num_var!=''
    && this.pw_var!=null && this.pw_var!=''
    && this.retype_pw_var!=null && this.retype_pw_var!=''
    && this.name_match(this.name_var) 
    && this.phone_num_match(this.phone_num_var) 
    && this.pw_var==this.retype_pw_var)
      return true;
    else
      return false;
  }


}
