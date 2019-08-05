import { Component, OnInit } from '@angular/core';
import { CommonServiceService } from '../common-service.service';

import { FormGroup ,FormControl } from '@angular/forms';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  login:any=[];
  answer:string;
  i:number;

  loginForm:FormGroup;

  constructor(
    private configService:CommonServiceService,
    private apiService:ApiService,
    private router:Router
    ) { }

  ngOnInit() {
    this.loginForm=new FormGroup({
      username:new FormControl(''),
      password:new FormControl('')
    });
  }

  onSubmit():void{
    this.apiService.loginUser(this.loginForm.value).subscribe(data=>this.router.navigate(['/plans']));
    console.log(this.loginForm.value);
  }

  // onSubmit(l):void{
  //   this.configService.getConfig()
  //   .subscribe((data) =>  {
  //       console.log(data);
  //   });
  // }
}
