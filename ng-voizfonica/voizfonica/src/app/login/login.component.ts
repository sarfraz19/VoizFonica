<<<<<<< HEAD
import { Component, OnInit } from "@angular/core";
import { CommonServiceService } from "../common-service.service";

// import { FormGroup ,FormControl } from '@angular/forms';
import { ApiService } from "../api.service";
import { Router } from "@angular/router";
=======
import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';
>>>>>>> 7b29146fdd06eb76ada71ea5de0e239789d116c4

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  count = 0;

<<<<<<< HEAD
  count = 0;

  ph_var: string;
  pw_var: string;
  user = { username: "", password: "", first_name: "" };
  preposdon = { type1: "" };

  isBtnClicked = false;
  isUser = true;
  passCrct: boolean;

  constructor(
    //private configService:CommonServiceService,
    private apiService: ApiService,
    private router: Router
  ) {
    console.log(apiService.getVal());
  }

  ngOnInit() {
    // this.loginForm=new FormGroup({
    //   username:new FormControl(''),
    //   password:new FormControl('')
    // });
  }

  check() {
    this.isBtnClicked = true;
    if (
      this.ph_var != null &&
      this.ph_var != "" &&
      this.pw_var != null &&
      this.pw_var != "" &&
      this.phone_num_match(this.ph_var)
    )
      this.login();
  }

  login() {
    this.count += 1;
    console.log(this.count);
    var ele: HTMLElement = document.getElementById("loginBtn");

    this.apiService
      .checkUserPresent(this.ph_var)
      .subscribe(
        data => ((this.user = data), ele.click()),
        error => (this.isUser = false)
      );

    this.goInside();
  }

  goInside() {
    if (this.user.password != this.pw_var) {
      this.apiService
        .checkIsCustomer(this.ph_var)
        .subscribe(data => (this.preposdon = data));
      if (this.preposdon.type1 == "Prepaid") this.router.navigate(["/prepaid"]);
      else if (this.preposdon.type1 == "Postpaid")
        this.router.navigate(["/postpaid"]);
      // else if(this.preposdon.prepostdon=="Dongle")
      //   this.router.navigate(['/dongle']);
    }
  }

  phone_num_match(num): boolean {
    if (num != null && num != "") {
      var str: string;
      str = num;
      var reg = new RegExp("^[6-9][0-9]{9}$");
      return reg.test(str);
=======
  poru_var: string;
  pw_var: string;
  user = { username: ''};
  preposdon = { type1: '' };

  isBtnClicked = false;

  isUser = true;
  passCrct=true;

  constructor(
    private apiService: ApiService,
    private router: Router
  ) {}

  ngOnInit() {}

  check() {
    this.isBtnClicked = true;
    if (this.poru_var != null && this.poru_var != '' && this.pw_var != null && this.pw_var != ''
      && this.phone_or_username_match(this.poru_var))
      this.checkUser();
  }

  checkUser() {
    // this.count+=1;
    // console.log(this.count);
    // var ele:HTMLElement=document.getElementById('loginBtn');

    var u1 = new RegExp('^[a-zA-Z]');
    var u2 = new RegExp('\ ');
    var u3 = new RegExp('^[a-zA-Z0-9|\*|#|\\-|_|\ ]+$');

    var u = u1.test(this.poru_var) && !u2.test(this.poru_var) && u3.test(this.poru_var);

    if (u) {
      this.apiService.checkUserNamePresent(this.poru_var).subscribe(
        data => (this.user = data, this.isUser = true,this.checkPass()
        ),
        error => (this.isUser = false)
      );
    }
    else {
      var pn=this.poru_var.substring(this.poru_var.length-10,this.poru_var.length);
      this.apiService.checkUserPresent(pn).subscribe(
        data => (this.user = data, this.isUser = true,this.checkPass()
          //,ele.click()
        ),
        error => (this.isUser = false)
      );
    }
  }

  checkPass()
  {

    if (this.isUser) {
      this.apiService.login(this.user.username, this.pw_var).subscribe(
        data => (this.passCrct = true,this.getTypeofCustomer()),
        error => (this.passCrct = false)
      );
    }

  }

  getTypeofCustomer()
  {
    this.apiService.checkIsCustomer(this.user.username).subscribe(data=>(this.preposdon=data,this.login()));
  }

  login()
  {
    this.apiService.changeNum(this.user.username);
    this.apiService.changeType(this.preposdon.type1);
    // if(this.preposdon.type1=="Prepaid")
    //   this.router.navigate(['/prepaid']);
    // else if(this.preposdon.type1=="Postpaid")
      this.router.navigate(['/postpaid']);
    // else if(this.preposdon.type1=="Dongle")
    //   this.router.navigate(['/dongle']);      
  }

  phone_or_username_match(num): boolean {
    if (num != null && num != '') {
      var str: string;
      str = num;
      str = str.trim();

      var p1 = new RegExp('^[6-9][0-9]{9}$');

      var p2 = new RegExp('^91[6-9][0-9]{9}$');
      var p3 = new RegExp('^91\\ [6-9][0-9]{9}$');
      var p4 = new RegExp('^91\\-[6-9][0-9]{9}$');

      var p5 = new RegExp('^\\+91[6-9][0-9]{9}$');
      var p6 = new RegExp('^\\+91\\ [6-9][0-9]{9}$');
      var p7 = new RegExp('^\\+91\\-[6-9][0-9]{9}$');

      var p = p1.test(str) || p2.test(str) || p3.test(str)
        || p4.test(str) || p5.test(str) || p6.test(str)
        || p7.test(str);


      var u1 = new RegExp('^[a-zA-Z]');
      var u2 = new RegExp('\ ');
      var u3 = new RegExp('^[a-zA-Z0-9|\*|#|\\-|_|\ ]+$');

      var u = u1.test(str) && !u2.test(str) && u3.test(str);

      return p || u;
>>>>>>> 7b29146fdd06eb76ada71ea5de0e239789d116c4
    }
    return true;
  }

<<<<<<< HEAD
  // onSubmit():void{
  //   this.apiService.loginUser(this.loginForm.value).subscribe(data=>this.router.navigate(['/plans']));
  //   console.log(this.loginForm.value);
  // }

  // onSubmit(l):void{
  //   this.configService.getConfig()
  //   .subscribe((data) =>  {
  //       console.log(data);
  //   });
  // }
=======
>>>>>>> 7b29146fdd06eb76ada71ea5de0e239789d116c4
}
