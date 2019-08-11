import { Component, OnInit } from '@angular/core';
import { CommonServiceService } from '../common-service.service';

// import { FormGroup ,FormControl } from '@angular/forms';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  // login:any=[];
  // answer:string;
  // i:number;

  // loginForm:FormGroup;

  count=0;

  ph_var:string;
  pw_var:string;
  user={username:'',password:'',first_name:''};
  preposdon={prepostdon:''};

  isBtnClicked=false;
  isUser=true;
  passCrct:boolean;

  constructor(
    //private configService:CommonServiceService,
    private apiService:ApiService,
    private router:Router
    ) {
      console.log(apiService.getVal());
     }

  ngOnInit() {
    // this.loginForm=new FormGroup({
    //   username:new FormControl(''),
    //   password:new FormControl('')
    // });
  }

  check()
  {
    this.isBtnClicked=true;
    if(this.ph_var!=null && this.ph_var!='' && this.pw_var!=null && this.pw_var!=''
    && this.phone_num_match(this.ph_var))
      this.login();
  }

  login()
  {
    this.count+=1;
    console.log(this.count);
    var ele:HTMLElement=document.getElementById('loginBtn');
    
    this.apiService.checkUserPresent(this.ph_var).subscribe(
      data=>(this.user=data,ele.click()),
      error=>(this.isUser=false)
      );
      
      this.goInside();
      
  }

  goInside()
  {
    if(this.user.password!=this.pw_var)
    {
      this.apiService.checkIsCustomer(this.ph_var).subscribe(data=>(this.preposdon=data));
      if(this.preposdon.prepostdon=="Prepaid")
        this.router.navigate(['/prepaid']);
      else if(this.preposdon.prepostdon=="Postpaid")
        this.router.navigate(['/postpaid']);
      // else if(this.preposdon.prepostdon=="Dongle")
      //   this.router.navigate(['/dongle']);
    }
  }

  phone_num_match(num):boolean
  {
    if(num!=null && num!='')
    {
      var str:string;
      str=num;
      var reg=new RegExp('^[6-9][0-9]{9}$');
      return reg.test(str);
    }
    return true;
  }

 
  
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
}
