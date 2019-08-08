import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-createaccount',
  templateUrl: './createaccount.component.html',
  styleUrls: ['./createaccount.component.css']
})
export class CreateaccountComponent implements OnInit {
  // onlineusers =[];
  // selected_ou={name:'',phone_num:'',pw:'',retype_pw:''};

  var1="hi";
  isBtnClicked=false;

  name_var:string;
  phone_num_var:string;
  pw_var:string;
  retype_pw_var:string;

  isCustomer=true;
  isAlreadyPresent:boolean;

  constructor(private apiService:ApiService,
    private router:Router) {}

  ngOnInit() {
    // this.apiService.getOnlineUsers().subscribe(data=>(this.onlineusers=data));
  }

  check()
  {
    this.isBtnClicked=true;

    this.apiService.checkIsCustomer(this.phone_num_var).subscribe(
      data=>(this.isCustomer=true),
      error=>(this.isCustomer=false)
      );

    this.apiService.checkUserPresent(this.phone_num_var).subscribe(
      data=>(this.isAlreadyPresent=true),
      error=>(this.isAlreadyPresent=false));
  }

  save(){
    this.apiService.createNewUser(this.name_var,this.phone_num_var,this.pw_var).subscribe(data=>(true));
    this.router.navigate(['/login']);
  }

  // select(id)
  // {
  //   this.apiService.getOnlineUserDetails(id).subscribe(data=>(this.selected_ou=data));    
  // }

  // create(ou)
  // {
  //   this.apiService.createOnlineUser(ou).subscribe(data=>(this.onlineusers.push(data),this.selected_ou=data));    
  // }

  // update(ou)
  // {
  //   this.apiService.updateOnlineUser(ou).subscribe(data=>(this.onlineusers[this.onlineusers.map(function(x){return x.id;}).indexOf(data.id)]=data));
  //   // It is easier to create a getOnlineUsers() function in this file and call it.
  // }

  // delete(id)
  // {
  //   this.apiService.deleteOnlineUser(id).subscribe(data=>(this.onlineusers.splice(this.onlineusers.map(function(x){return x.id;}).indexOf(id),1),this.selected_ou={name:'',phone_num:'',pw:'',retype_pw:''}));
  // }
  
  name_match(str):boolean
  {
    if(str!=null && str!='')
    {
      str=str.trim();
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
